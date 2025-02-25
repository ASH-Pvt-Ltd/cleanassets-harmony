
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
  // Government Users (0551)
  { id: "0551-001", password: "0551", role: "government", name: "Govt Officer One", organization: "Goa Government" },
  { id: "0551-002", password: "0551", role: "government", name: "Govt Officer Two", organization: "Goa Government" },
  
  // Municipality Users (0552)
  { id: "0552-001", password: "0552", role: "municipality", name: "Municipality Officer One", organization: "Panaji Municipality" },
  { id: "0552-002", password: "0552", role: "municipality", name: "Municipality Officer Two", organization: "Margao Municipality" },
  
  // Verification Officers (0553)
  { id: "0553-001", password: "0553", role: "verification", name: "Verification Officer One", organization: "Verification Department" },
  { id: "0553-002", password: "0553", role: "verification", name: "Verification Officer Two", organization: "Verification Department" },
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
