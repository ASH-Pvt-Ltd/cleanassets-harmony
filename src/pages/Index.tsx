import React, { useState, useEffect } from 'react';
import { Building2, ClipboardCheck, Truck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();
  const assetCategories = [
    {
      title: "Infrastructure",
      description: "Waste Processing Plants, Landfills, Composting Units, and more",
      icon: Building2,
    },
    {
      title: "Facilities", 
      description: "Collection Centers, Treatment Centers, Storage Units",
      icon: ClipboardCheck,
    },
    {
      title: "Fleet",
      description: "Garbage Trucks, Collection Vehicles, Road Sweepers",
      icon: Truck,
    },
  ];

  const statistics = [
    { label: "Village Panchayats", value: 191 },
    { label: "Municipal Councils", value: 13 },
    { label: "Daily Waste Generation", value: 226.87 },
    { label: "Waste Treatment", value: 197.47 },
  ];

  const AnimatedNumber = ({ value }: { value: number }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCurrentValue(value);
          clearInterval(timer);
        } else {
          setCurrentValue(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <span>
        {typeof value === 'number' && value % 1 !== 0
          ? currentValue.toFixed(2)
          : Math.round(currentValue)}
        {typeof value === 'number' && value % 1 !== 0 ? ' TPD' : ''}
      </span>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 hero-gradient">
        <div className="container px-4 pb-20">
          <div className="hero-content max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Government of Goa Initiative
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Asset Management System for{" "}
              <span className="text-primary">Waste Management</span>
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

      {/* Vision Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Target className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To revolutionize waste management in Goa by providing a secure, scalable, and AI-powered asset management platform that enables government authorities and municipalities to track, verify, and optimize infrastructure, facilities, and fleet operations. By leveraging technology, we aim to enhance transparency, improve efficiency, and promote a cleaner, more sustainable future for all communities in Goa.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waste Management in Numbers</h2>
            <p className="text-muted-foreground">Key statistics highlighting our impact across Goa</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Categories and Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Asset Categories */}
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-4">Comprehensive Asset Management</h2>
                <p className="text-muted-foreground">
                  Track and manage various categories of waste management assets across Goa
                </p>
              </div>
              
              <div className="grid gap-6">
                {assetCategories.map((category) => (
                  <Card key={category.title} className="transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="secondary" className="w-full" asChild>
                        <Link to={user ? "/dashboard" : "/login"}>
                          {user ? "View Details" : "Sign in to View"}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-4">Asset Distribution Map</h2>
                <p className="text-muted-foreground">
                  Explore waste management assets across Goa
                </p>
              </div>
              <div className="h-full min-h-[600px] rounded-lg overflow-hidden shadow-lg">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
