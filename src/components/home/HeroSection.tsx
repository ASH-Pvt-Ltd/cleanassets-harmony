
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <section className="pt-24 lg:pt-32 hero-gradient">
      <div className="container px-4 pb-20">
        <div className="hero-content max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Government of Goa Initiative
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Transforming Goa's Future Through{" "}
            <span className="text-primary">Smart Waste Management</span>
          </h1>
          <p className="text-2xl font-medium text-muted-foreground mt-4">
            Track. Manage. Sustain – Goa's Smart Waste Solution!
          </p>
          <p className="text-xl text-muted-foreground">
            Empowering government authorities and municipalities to efficiently track and manage waste management infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {user ? (
              <Button size="lg" asChild>
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button size="lg" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Add your video element here when you have it */}
      </div>
    </section>
  );
};

export default HeroSection;
