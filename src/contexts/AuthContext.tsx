
import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'admin' | 'supervisor' | 'operator';

interface User {
  id: string;
  password: string;
  role: Role;
  name: string;
}

const mockUsers: User[] = [
  // Admin users (0551)
  { id: "0551-001", password: "0551", role: "admin", name: "Admin One" },
  { id: "0551-002", password: "0551", role: "admin", name: "Admin Two" },
  
  // Supervisor users (0552)
  { id: "0552-001", password: "0552", role: "supervisor", name: "Supervisor One" },
  { id: "0552-002", password: "0552", role: "supervisor", name: "Supervisor Two" },
  
  // Operator users (0553)
  { id: "0553-001", password: "0553", role: "operator", name: "Operator One" },
  { id: "0553-002", password: "0553", role: "operator", name: "Operator Two" },
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
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
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
