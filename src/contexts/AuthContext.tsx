
import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'government' | 'municipality' | 'verification';

interface User {
  id: string;
  password: string;
  role: Role;
  name: string;
  organization: string;
  lastLogin?: string;
}

const mockUsers: User[] = [
  // Government Users (Goa1-xxx)
  { id: "Goa1-001", password: "g001", role: "government", name: "Govt Officer One", organization: "Goa Government" },
  { id: "Goa1-002", password: "g002", role: "government", name: "Govt Officer Two", organization: "Goa Government" },
  
  // Municipality Users (Mun1-xxx)
  { id: "Mun1-001", password: "m001", role: "municipality", name: "Municipality Officer One", organization: "Panaji Municipality" },
  { id: "Mun1-002", password: "m002", role: "municipality", name: "Municipality Officer Two", organization: "Margao Municipality" },
  
  // Verification Officers (Ver1-xxx)
  { id: "Ver1-001", password: "v001", role: "verification", name: "Verification Officer One", organization: "Verification Department" },
  { id: "Ver1-002", password: "v002", role: "verification", name: "Verification Officer Two", organization: "Verification Department" },
];

interface AuthContextType {
  user: User | null;
  login: (id: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (id: string, password: string) => {
    const foundUser = mockUsers.find(u => u.id === id && u.password === password);
    if (foundUser) {
      const userWithLogin = {
        ...foundUser,
        lastLogin: new Date().toISOString(),
      };
      setUser(userWithLogin);
      localStorage.setItem('user', JSON.stringify(userWithLogin));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
