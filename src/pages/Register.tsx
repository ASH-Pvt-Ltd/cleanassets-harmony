
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowLeft, Truck, Building2, Users2, ShieldCheck } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-64 h-64 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Back to Home Navigation */}
      <div className="relative z-10 p-4">
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-white/50"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Registration Card */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <Card className="w-[380px] bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Truck className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Register for SwachhGoa</CardTitle>
            <CardDescription>
              Choose your role to begin registration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full text-left flex items-center gap-3 h-auto py-4" 
              onClick={() => navigate('/login')}
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
              onClick={() => navigate('/login')}
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
              onClick={() => navigate('/login')}
            >
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              <div className="flex flex-col items-start">
                <span className="font-medium">Verification Officer</span>
                <span className="text-xs text-muted-foreground">ID Format: Ver1-XXX</span>
              </div>
            </Button>
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
