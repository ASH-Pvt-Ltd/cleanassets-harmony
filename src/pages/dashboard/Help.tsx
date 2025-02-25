
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';

const Help = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
          <p className="text-muted-foreground">Find answers and get support</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <Card className="p-6">
            <div className="flex gap-4">
              <Input placeholder="Search help articles..." className="flex-1" />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Documentation
                </CardTitle>
                <CardDescription>Browse through our documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">View Documentation</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contact Support
                </CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Contact Us</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions and answers</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I submit a new report?</AccordionTrigger>
                  <AccordionContent>
                    Navigate to the Reports section, click on "New Report", fill in the required information,
                    and click submit. Your report will be reviewed by our team.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How can I track my asset requests?</AccordionTrigger>
                  <AccordionContent>
                    Go to the Asset Requests section in your dashboard. You'll find a list of all your
                    requests and their current status.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What do I do if I find an issue?</AccordionTrigger>
                  <AccordionContent>
                    Use the "Raise Query" feature in your dashboard to report any issues. Our team will
                    respond within 24 hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How often should I submit reports?</AccordionTrigger>
                  <AccordionContent>
                    Report submission frequency depends on your role and organization. Check your
                    dashboard's Reports section for your specific schedule.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Need More Help?
              </CardTitle>
              <CardDescription>Contact our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Enter your subject" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="Describe your issue..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Help;
