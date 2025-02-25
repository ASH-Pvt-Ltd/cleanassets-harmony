
import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: Implement message sending logic
      console.log('Message sent:', message);
      setMessage('');
    }
  };

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
        <SheetContent className="w-[400px] sm:w-[540px] flex flex-col">
          <SheetHeader>
            <SheetTitle>SwachhGoa Assistant</SheetTitle>
          </SheetHeader>
          <div className="flex-1 mt-4 space-y-4">
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
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatbotButton;
