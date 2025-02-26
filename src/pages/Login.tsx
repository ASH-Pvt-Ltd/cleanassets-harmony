
import React, { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { Truck, ArrowLeft, Info } from 'lucide-react';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login, user, isLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (submitting) return; // Prevent multiple submissions
    
    setSubmitting(true);
    try {
      const success = await login(id, password);
      
      if (!success) {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Helper function to show ID format hint
  const showIdFormatHint = () => {
    toast.info(
      'Valid ID Format Examples:\n' +
      'For Government: GoaXX-XXX (e.g., Goa01-001)\n' +
      'For Municipality: MunXX-XXX (e.g., Mun01-001)\n' +
      'For Verification: VerXX-XXX (e.g., Ver01-001)',
      {
        duration: 5000,
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background with animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"
            style={{ animation: 'blob 7s infinite' }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
            style={{ animation: 'blob 8s infinite', animationDelay: '2s' }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
            style={{ animation: 'blob 9s infinite', animationDelay: '4s' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>
        </div>
      </div>

      {/* Back to Home Navigation */}
      <div className="relative z-10 p-4">
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-white/50 transition-colors duration-200"
          onClick={() => navigate('/')}
          disabled={submitting}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <Card className="w-[320px] bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/90">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center mb-2">
              <Truck className="h-12 w-12 text-primary animate-bounce" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <CardDescription>
              Sign in to continue to SwachhGoa
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center justify-between">
                  User ID
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={showIdFormatHint}
                    disabled={submitting}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </label>
                <Input
                  type="text"
                  placeholder="Enter ID (e.g., Goa01-001)"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                  disabled={submitting}
                  className="bg-white/50 transition-colors focus:bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={submitting}
                  className="bg-white/50 transition-colors focus:bg-white"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full transition-transform hover:scale-[1.02]"
                disabled={submitting}
              >
                {submitting ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 text-center">
            <div className="text-sm">
              New to SwachhGoa?{' '}
              <Button 
                variant="link" 
                asChild 
                className="px-1 font-semibold text-primary hover:text-primary/80 transition-colors"
                disabled={submitting}
              >
                <Link to="/register">Create an account</Link>
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">
              Need help? Contact administrator
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
