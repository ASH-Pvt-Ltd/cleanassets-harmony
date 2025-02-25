
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search,
  BookOpen,
  Mail,
  MessageCircleQuestion,
  Phone,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I submit a new asset request?",
      answer: "Navigate to the Requests page and click on the 'New Request' button. Fill in the required details about the asset and submit the form for review.",
      category: "Requests"
    },
    {
      question: "What are the different user roles?",
      answer: "The system has three main roles: Municipality Officers, Government Administrators, and Verification Officers. Each role has specific permissions and access levels.",
      category: "Access"
    },
    {
      question: "How can I track my submitted requests?",
      answer: "All your submitted requests can be viewed in the Requests page. Use the status tabs to filter between pending, approved, and rejected requests.",
      category: "Requests"
    }
  ];

  const guides = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of navigating and using the platform",
      icon: BookOpen,
      category: "Basics"
    },
    {
      title: "Asset Management",
      description: "Comprehensive guide to managing municipality assets",
      icon: Info,
      category: "Assets"
    },
    {
      title: "Request Submission",
      description: "Step-by-step guide for submitting and tracking requests",
      icon: MessageCircleQuestion,
      category: "Requests"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Help Center</h1>
          <p className="text-muted-foreground mt-2">
            Find answers, documentation, and support
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search for help articles..." 
            className="pl-10 h-12"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:bg-accent/50 cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MessageCircleQuestion className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">FAQs</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse frequently asked questions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:bg-accent/50 cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed guides and tutorials
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:bg-accent/50 cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Contact Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Get in touch with our team
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="faq" className="space-y-4">
          <TabsList>
            <TabsTrigger value="faq" className="flex items-center">
              <HelpCircle className="mr-2 h-4 w-4" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium">{faq.question}</h3>
                      <Badge variant="secondary">{faq.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" className="w-full">
              View All FAQs
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </TabsContent>

          <TabsContent value="guides" className="space-y-4">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:bg-accent/50 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <guide.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">{guide.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">{guide.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" className="w-full">
              Browse All Guides
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </TabsContent>

          <TabsContent value="support" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Get in touch with our support team for assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Support</h4>
                      <p className="text-sm text-muted-foreground">
                        support@swachhgoa.gov.in
                      </p>
                    </div>
                    <Button variant="outline" className="ml-auto">
                      Send Email
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Available Mon-Fri, 9 AM - 5 PM IST
                      </p>
                    </div>
                    <Button variant="outline" className="ml-auto">
                      +91 832 XXX XXXX
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HelpCenter;
