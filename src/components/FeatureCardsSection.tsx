import { Button } from "@/components/ui/button";
import { Shield, Target, Zap, Brain } from "lucide-react";

const FeatureCardsSection = () => {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card - Learn How Hackers Think */}
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 shadow-2xl shadow-black/70 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                Learn How Hackers<br />
                Think & Stop Them
              </h3>
              
              {/* Cyber skill icons */}
              <div className="flex space-x-2 mb-8">
                {[Shield, Target, Zap, Brain].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
              
              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">🔒 Penetration Testing</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">🕵️ Ethical Hacking</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">🛡️ Defense</span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Incident Response</span>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Vulnerability Assessment</span>
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">Security Analysis</span>
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">🔐 Compliance</span>
              </div>
              
              <h4 className="text-2xl font-bold text-white drop-shadow-lg">
                7-Day Cyber<br />
                Jumpstart
              </h4>
            </div>
            
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
          </div>
          
          {/* Right Card - Hands-On Missions */}
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 shadow-2xl shadow-black/70 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                Run Legal Cyber<br />
                Missions
              </h3>
              
              {/* Terminal/browser simulation area */}
              <div className="aspect-video bg-gray-900/70 rounded-lg flex items-center justify-center mb-6 shadow-inner border border-gray-700/50 relative overflow-hidden font-mono">
                {/* Terminal background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-blue-900/30"></div>
                
                {/* Terminal content */}
                <div className="text-green-400 text-sm space-y-1 relative z-10 text-left">
                  <div>$ nmap -sS target.cyberdraft.ai</div>
                  <div className="text-gray-400">Starting Nmap scan...</div>
                  <div className="text-blue-400">Port 22/tcp open ssh</div>
                  <div className="text-red-400">Port 80/tcp open http</div>
                  <div className="animate-pulse">█</div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button variant="outline" className="bg-black/40 border-white/40 text-white hover:bg-black/60 text-sm">
                  Start Mission
                </Button>
              </div>
            </div>
            
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
