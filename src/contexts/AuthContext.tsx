
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { AuthContextType, User } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simulated user database
const MOCK_USERS = {
  'Goa01-001': {
    id: 'Goa01-001',
    password: 'password123',
    name: 'John Government',
    role: 'government',
    organization: 'Goa Government'
  },
  'Mun01-001': {
    id: 'Mun01-001',
    password: 'password123',
    name: 'Mary Municipality',
    role: 'municipality',
    organization: 'North Goa Municipality'
  },
  'Ver01-001': {
    id: 'Ver01-001',
    password: 'password123',
    name: 'Victor Verifier',
    role: 'verification',
    organization: 'Verification Department'
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (id: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockUser = MOCK_USERS[id as keyof typeof MOCK_USERS];
      
      if (!mockUser || mockUser.password !== password) {
        toast.error('Invalid credentials');
        return false;
      }

      const userData: User = {
        id: mockUser.id,
        name: mockUser.name,
        role: mockUser.role,
        organization: mockUser.organization,
        lastLogin: new Date().toISOString()
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      const portalName = determineRoleDisplayName(userData.role);
      toast.success(`Welcome to the ${portalName} Portal`);
      navigate('/dashboard', { replace: true });
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const determineRoleDisplayName = (role: string): string => {
    switch (role) {
      case 'government':
        return 'Government';
      case 'municipality':
        return 'Municipality';
      case 'verification':
        return 'Verification';
      default:
        return 'Verification';
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate logout delay
      localStorage.removeItem('user');
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
