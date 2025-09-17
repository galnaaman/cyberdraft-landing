"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Facebook } from "lucide-react";

const CommunitySection = () => {
  const benefits = [
    "7-Day Cyber Jumpstart crash course",
    "Hands-on cyber missions in your browser", 
    "Job-ready certificate upon completion",
    "Step-by-step career guidance to $100K+"
  ];

  return (
    <section id="community" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-blue-500/30 shadow-2xl shadow-black/70">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Join the CyberDraft Movement
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                This isn't just an online course. It's a career-changing launchpad for everyday people ready to break into high-paying cybersecurity careers — no degree required.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 flex items-center gap-3 text-base font-medium shadow-lg"
                  onClick={() => window.open('https://www.facebook.com/share/g/1PGiwzHuyq/', '_blank')}
                >
                  <Facebook size={20} className="text-white" />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">Facebook</span>
                    <span className="text-blue-200 text-sm">Join community</span>
                  </div>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 inline-block mb-6 shadow-2xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70 transition-all duration-300 transform hover:scale-105 border border-blue-400/40">
                <img src="/lovable-uploads/07afabc0-2ed0-41f6-8c9e-40700e08ad15.png" alt="CyberDraft.AI Education" className="w-16 h-16 mx-auto" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">CyberDraft.AI</h4>
              <p className="text-blue-400 font-semibold mb-4 drop-shadow-md text-xl">Your Cybersecurity Launchpad</p>
              <p className="text-gray-400 text-base max-w-sm mx-auto">
                The platform that transforms beginners into cybersecurity professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
