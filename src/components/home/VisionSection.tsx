
import React from 'react';
import { Target } from "lucide-react";

const VisionSection = () => {
  return (
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
  );
};

export default VisionSection;
