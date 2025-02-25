
import { Building2, ClipboardCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 hero-gradient">
        <div className="container px-4 pb-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Government of Goa Initiative
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Asset Management System for{" "}
              <span className="text-primary">Waste Management</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering government authorities and municipalities to efficiently track and manage waste management infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <a href="#register">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#learn-more">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Categories Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
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
                    <a href={`#learn-more-${category.title.toLowerCase()}`}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
