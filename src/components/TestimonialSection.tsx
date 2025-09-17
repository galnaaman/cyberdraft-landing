"use client";

import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-blue-500/30 shadow-2xl shadow-black/70">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/d16e4641-92a5-440a-aa26-b14ba54375df.png" 
                alt="David Shusterman - CyberDraft Founder" 
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-500/30 shadow-lg"
              />
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-relaxed drop-shadow-lg">
              "Success in cybersecurity isn't about where you start. It's about how fast you gain{" "}
              <span className="text-blue-400">real-world skills</span> — and what you do with them."
            </blockquote>
            
            <div className="mb-8">
              <p className="text-gray-300 text-lg font-medium">
                - CyberDraft Founder David Shusterman
              </p>
            </div>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 flex items-center gap-3 text-base font-medium shadow-lg mx-auto"
              onClick={() => window.open('https://www.linkedin.com/in/david-shusterman-552b8b131/', '_blank')}
            >
              <Linkedin size={20} className="text-white" />
              Follow David on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
