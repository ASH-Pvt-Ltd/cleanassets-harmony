
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
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          const profile = await fetchUserProfile(session.user.id);
          if (!profile) {
            setUser(null);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        const profile = await fetchUserProfile(session.user.id);
        if (!profile) {
          setUser(null);
        }
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
        return null;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error || !profile) {
        console.error('Profile fetch error:', error || 'Profile not found');
        return null;
      }

      const role = determineRole(authUser.email);
      const userData = {
        id: authUser.email || userId,
        role: role,
        name: profile.full_name || 'Unknown',
        organization: profile.organization || 'Unknown',
        lastLogin: new Date().toISOString(),
      };
      
      setUser(userData);
      return profile;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  const login = async (id: string, password: string): Promise<boolean> => {
    try {
      let email = '';

      if (id.toLowerCase().startsWith('goa')) {
        email = `${id}@goa.gov.in`;
      } else if (id.toLowerCase().startsWith('mun')) {
        email = `${id}@municipality.gov.in`;
      } else if (id.toLowerCase().startsWith('ver')) {
        email = `${id}@verification.gov.in`;
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
      navigate('/', { replace: true });
      toast.success('Successfully logged out');
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
