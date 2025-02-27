
import React from 'react';
import { Building2, ClipboardCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AssetManagementSection = () => {
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

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Asset Management</h2>
          <p className="text-muted-foreground">
            Track and manage various categories of waste management assets across Goa
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
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
    </section>
  );
};

export default AssetManagementSection;
