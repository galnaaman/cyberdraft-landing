
import { GraduationCap, DollarSign, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "No Degree Required",
      description: "Skip the traditional education route. Our hands-on approach gets you job-ready skills without the time and expense of a four-year degree."
    },
    {
      icon: DollarSign,
      title: "High-Paying Career Path",
      description: "Cybersecurity professionals earn $100K+ salaries. We'll show you exactly how to position yourself for these lucrative opportunities."
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      description: "Go from complete beginner to job-ready in months, not years. Our proven system accelerates your learning through practical, real-world experience."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16 drop-shadow-2xl">
          Why Choose CyberDraft?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-black/70 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 shadow-2xl shadow-black/60 hover:shadow-2xl hover:shadow-blue-500/30 group"
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-3 w-fit mb-6 shadow-2xl shadow-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/70 transition-all duration-300 border border-blue-400/40">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-lg">
                {benefit.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced background ambient effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default BenefitsSection;
