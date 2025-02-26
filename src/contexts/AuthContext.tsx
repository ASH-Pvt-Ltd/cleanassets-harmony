
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
          const profile = await fetchUserProfile(session.user.id, setUser);
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
        const profile = await fetchUserProfile(session.user.id, setUser);
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

  const login = async (id: string, password: string): Promise<boolean> => {
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
          // Navigate before showing the toast to improve perceived performance
          navigate('/dashboard', { replace: true });
          toast.success(`Welcome to the ${determineRoleDisplayName(data.user.email)} Portal`);
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error instanceof Error ? error.message : 'An error occurred during login');
      return false;
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
    try {
      setIsLoading(true);  // Set loading state before logout
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      navigate('/', { replace: true });
      toast.success('Successfully logged out');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('An error occurred during logout');
    } finally {
      setIsLoading(false);  // Reset loading state
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
