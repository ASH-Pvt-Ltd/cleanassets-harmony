
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { AuthContextType, User } from '@/types/auth';
import { fetchUserProfile, signIn } from '@/utils/auth';

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
          await fetchUserProfile(session.user.id, setUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      try {
        if (session) {
          await fetchUserProfile(session.user.id, setUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Auth state change error:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (id: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const email = await signIn(id);

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
        const profile = await fetchUserProfile(data.user.id, setUser);
        if (profile) {
          const role = determineRoleDisplayName(data.user.email);
          toast.success(`Welcome to the ${role} Portal`);
          navigate('/dashboard', { replace: true });
          return true;
        }
      }

      toast.error('Failed to load user profile');
      return false;
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error instanceof Error ? error.message : 'An error occurred during login');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const determineRoleDisplayName = (email?: string): string => {
    if (!email) return 'Verification';
    if (email.includes('@goa.gov.in')) return 'Government';
    if (email.includes('@municipality.gov.in')) return 'Municipality';
    if (email.includes('@verification.gov.in')) return 'Verification';
    return 'Verification';
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      navigate('/', { replace: true });
      toast.success('Successfully logged out');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred during logout');
    } finally {
      setIsLoading(false);
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
