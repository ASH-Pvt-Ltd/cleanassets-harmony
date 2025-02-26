
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export type Role = 'government' | 'municipality' | 'verification';

export interface User {
  id: string;
  role: Role;
  name: string;
  organization: string;
  lastLogin?: string;
}

interface AuthContextType {
  user: User | null;
  login: (id: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check active session
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          await fetchUserProfile(session.user.id);
        }
      } catch (error) {
        console.error('Error checking auth session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        await fetchUserProfile(session.user.id);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const determineRole = (email: string | undefined): Role => {
    if (!email) return 'verification';
    if (email.includes('@goa.gov.in')) return 'government';
    if (email.includes('@municipality.gov.in')) return 'municipality';
    if (email.includes('@verification.gov.in')) return 'verification';
    return 'verification';
  };

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (!authUser) {
        setUser(null);
        return null;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        throw error;
      }

      if (profile) {
        const role = determineRole(authUser.email);
        
        setUser({
          id: authUser.email || userId,
          role: role,
          name: profile.full_name || 'Unknown',
          organization: profile.organization || 'Unknown',
          lastLogin: new Date().toISOString(),
        });
        return profile;
      } else {
        throw new Error('Profile not found');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      toast.error('Error fetching user profile');
      return null;
    }
  };

  const login = async (id: string, password: string): Promise<boolean> => {
    try {
      let email = '';
      let role: Role;

      if (id.toLowerCase().startsWith('goa')) {
        email = `${id}@goa.gov.in`;
        role = 'government';
      } else if (id.toLowerCase().startsWith('mun')) {
        email = `${id}@municipality.gov.in`;
        role = 'municipality';
      } else if (id.toLowerCase().startsWith('ver')) {
        email = `${id}@verification.gov.in`;
        role = 'verification';
      } else {
        toast.error('Invalid ID format. Must start with Goa, Mun, or Ver');
        return false;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error.message);
        toast.error(error.message);
        return false;
      }

      if (data.user) {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ role: role })
          .eq('id', data.user.id);

        if (updateError) {
          console.error('Error updating role:', updateError);
        }

        const profile = await fetchUserProfile(data.user.id);
        if (profile) {
          navigate('/dashboard');
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      toast.success('Successfully logged out');
      navigate('/', { replace: true });
      
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred during logout');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
