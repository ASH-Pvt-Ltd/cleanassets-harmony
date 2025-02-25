
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <span>SwachhGoa Assistant</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                👋 Hi! I'm your SwachhGoa Assistant. I can help you:
              </p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                <li>Navigate through different sections</li>
                <li>Understand features and functionalities</li>
                <li>Find specific information</li>
                <li>Get answers to common questions</li>
              </ul>
            </div>
            <div className="h-[400px] overflow-y-auto border rounded-lg p-4">
              {/* Chat messages will be implemented here */}
              <p className="text-center text-muted-foreground text-sm">
                Chat functionality coming soon...
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatbotButton;
