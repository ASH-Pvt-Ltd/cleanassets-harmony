
import { Button } from "./ui/button";
import { Menu, Truck } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navigation = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/30 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <Truck className="h-6 w-6 text-primary" />
          <span className="font-semibold">SwachhGoa</span>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="outline" className="ml-4">
            <a href="#login">Login</a>
          </Button>
          <Button asChild>
            <a href="#register">Register</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild variant="outline" className="w-full">
                <a href="#login">Login</a>
              </Button>
              <Button asChild className="w-full">
                <a href="#register">Register</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;
