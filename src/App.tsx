
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import Infrastructure from '@/pages/dashboard/Infrastructure';
import Assets from '@/pages/dashboard/Assets';
import Fleet from '@/pages/dashboard/Fleet';
import Approvals from '@/pages/dashboard/Approvals';
import Reports from '@/pages/dashboard/Reports';
import Queries from '@/pages/dashboard/Queries';
import Settings from '@/pages/dashboard/Settings';
import Help from '@/pages/dashboard/Help';
import Requests from '@/pages/dashboard/Requests';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/infrastructure" element={<Infrastructure />} />
          <Route path="/dashboard/assets" element={<Assets />} />
          <Route path="/dashboard/fleet" element={<Fleet />} />
          <Route path="/dashboard/approvals" element={<Approvals />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/queries" element={<Queries />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/help" element={<Help />} />
          <Route path="/dashboard/requests" element={<Requests />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
