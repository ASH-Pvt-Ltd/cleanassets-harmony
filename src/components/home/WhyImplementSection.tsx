
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Map from "@/components/Map";

const WhyImplementSection = () => {
  const whyImplement = [
    {
      title: "Streamlined Coordination",
      description: "Facilitates collaboration among Village Panchayats, Municipal Councils, and Zilla Panchayats."
    },
    {
      title: "Resource Optimization",
      description: "Ensures effective allocation and monitoring of waste management assets."
    },
    {
      title: "Enhanced Transparency",
      description: "Provides real-time data, promoting accountability and informed decision-making."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why Implement Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Why Implement an Asset Management Platform?</h2>
            <p className="text-muted-foreground mb-8">
              Given the extensive network of local governing bodies and the pressing need for efficient waste management, a centralized asset management platform offers:
            </p>
            <div className="grid gap-6">
              {whyImplement.map((item) => (
                <Card key={item.title} className="transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:sticky lg:top-24">
            <div className="space-y-4 mb-6">
              <h2 className="text-3xl font-bold">Asset Distribution Map</h2>
              <p className="text-muted-foreground">
                Explore waste management assets across Goa
              </p>
            </div>
            <Card className="transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
              <CardContent className="p-0">
                <div className="h-[600px] lg:h-[500px] rounded-lg overflow-hidden">
                  <Map />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImplementSection;
