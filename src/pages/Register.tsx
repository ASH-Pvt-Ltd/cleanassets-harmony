import React, { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Truck, Building2, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

type Role = 'government' | 'municipality' | 'verification' | null;

interface RegistrationData {
  name: string;
  organization: string;
  id: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    organization: '',
    id: '',
    password: '',
  });

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setFormData({
      name: '',
      organization: '',
      id: '',
      password: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Registration request submitted successfully');
    navigate('/login', { replace: true });
  };

  const getIdFormat = (role: Role) => {
    switch (role) {
      case 'government':
        return 'Goa1-XXX';
      case 'municipality':
        return 'Mun1-XXX';
      case 'verification':
        return 'Ver1-XXX';
      default:
        return '';
    }
  };

  const getRoleTitle = (role: Role) => {
    switch (role) {
      case 'government':
        return 'Government Officer';
      case 'municipality':
        return 'Municipality/Panchayat Officer';
      case 'verification':
        return 'Verification Officer';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-64 h-64 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 p-4">
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-white/50"
          onClick={() => selectedRole ? setSelectedRole(null) : navigate('/')}
        >
          <ArrowLeft className="h-4 w-4" />
          {selectedRole ? 'Back to Role Selection' : 'Back to Home'}
        </Button>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <Card className="w-[380px] bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Truck className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Register for SwachhGoa</CardTitle>
            <CardDescription>
              {selectedRole ? getRoleTitle(selectedRole) : 'Choose your role to begin registration'}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {!selectedRole ? (
              <>
                <Button 
                  variant="outline" 
                  className="w-full text-left flex items-center gap-3 h-auto py-4" 
                  onClick={() => handleRoleSelect('government')}
                >
                  <Building2 className="h-5 w-5 text-primary shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Government Officer</span>
                    <span className="text-xs text-muted-foreground">ID Format: Goa1-XXX</span>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-left flex items-center gap-3 h-auto py-4"
                  onClick={() => handleRoleSelect('municipality')}
                >
                  <Users2 className="h-5 w-5 text-primary shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Municipality/Panchayat Officer</span>
                    <span className="text-xs text-muted-foreground">ID Format: Mun1-XXX</span>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-left flex items-center gap-3 h-auto py-4"
                  onClick={() => handleRoleSelect('verification')}
                >
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Verification Officer</span>
                    <span className="text-xs text-muted-foreground">ID Format: Ver1-XXX</span>
                  </div>
                </Button>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    placeholder="Enter your organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="id">Officer ID</Label>
                  <Input
                    id="id"
                    placeholder={`Format: ${getIdFormat(selectedRole)}`}
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Register
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-3 text-center text-sm text-muted-foreground">
            <div>
              Already have an account? 
              <Button variant="link" asChild className="px-2">
                <Link to="/login">Sign in</Link>
              </Button>
            </div>
            <div className="text-xs">
              For new registration, please contact your department administrator
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
