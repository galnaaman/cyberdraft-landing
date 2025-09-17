
"use client";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-black/60 backdrop-blur-md rounded-full px-6 py-3 inline-block mb-8 border border-blue-500/50 shadow-2xl shadow-blue-500/25">
          <span className="text-blue-400 text-sm font-medium">🛡️ Launch your cybersecurity career — no degree required.</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Launch Your <span className="text-blue-400">Cybersecurity Career</span><br />
          $100K+ Jobs Without Degree<br />
          <span className="text-cyan-400">Required</span>
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Master ethical hacking, penetration testing, and cyber defense with hands-on training. 
          Join 2,000+ professionals who've launched successful cybersecurity careers without traditional education. 
          Get job-ready skills in 6 months, not 4 years.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-2xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 border border-blue-400/30"
            onClick={() => window.open('https://join.cyberdraft.ai/order-form', '_blank')}
          >
            Start 7-Day Jumpstart
          </Button>
          <Button 
            variant="outline" 
            className="bg-black/40 border-white/40 text-white hover:bg-black/60 px-8 py-3 text-lg shadow-2xl shadow-black/40 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 backdrop-blur-sm"
            onClick={() => window.open('https://join.cyberdraft.ai/7-day-cyber-jumpstart', '_blank')}
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Enhanced ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
