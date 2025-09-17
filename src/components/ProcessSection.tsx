import { PlayCircle, Brain, Award } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      step: "STEP 1",
      icon: PlayCircle,
      title: "Start 7-Day Jumpstart",
      description: "Jump into our flagship crash course. Learn how hackers think, run your first legal cyber mission, and discover the cybersecurity landscape."
    },
    {
      step: "STEP 2", 
      icon: Brain,
      title: "Master Core Skills",
      description: "Build hands-on expertise through practical exercises. Learn penetration testing, ethical hacking, and defense strategies that employers demand."
    },
    {
      step: "STEP 3",
      icon: Award,
      title: "Launch Your Career",
      description: "Earn your certificate, build a portfolio, and get step-by-step guidance to land your first $100K+ cybersecurity role."
    }
  ];

  return (
    <section id="process" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16 drop-shadow-2xl">
          Your Path to Cybersecurity Success
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-black/70 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-2xl shadow-black/60 hover:shadow-2xl hover:shadow-blue-500/30 group relative overflow-hidden"
            >
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-3 w-fit mb-6 shadow-2xl shadow-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/70 transition-all duration-300 border border-blue-400/40">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-blue-400 text-sm font-medium mb-2 drop-shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-lg">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
