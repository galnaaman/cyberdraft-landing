"use client";

import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
          Ready to Launch Your Cybersecurity Career?
        </h2>
        <p className="text-xl text-white/80 mb-12 drop-shadow-lg">
          Join thousands who've transformed their careers with CyberDraft's proven system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-2xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 border border-blue-400/30"
            onClick={() => window.open('https://join.cyberdraft.ai/order-form', '_blank')}
          >
            Start 7-Day Jumpstart
          </Button>
          <Button 
            variant="outline" 
            className="bg-black/40 border-white/40 text-white hover:bg-black/60 px-8 py-4 text-lg shadow-2xl shadow-black/40 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 backdrop-blur-sm"
            onClick={() => window.open('https://join.cyberdraft.ai/7-day-cyber-jumpstart', '_blank')}
          >
            → Learn More
          </Button>
        </div>
      </div>
      
      {/* Enhanced final ambient lighting */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;
