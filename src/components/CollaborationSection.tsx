
import { CheckCircle } from "lucide-react";

const CollaborationSection = () => {
  const features = [
    "Real-world exercises that simulate actual cyber threats",
    "Mindset shifts that teach you to think like a hacker", 
    "Hands-on experience with live security scenarios",
    "Direct path to $100K–$200K career opportunities",
    "No degree or tech background required"
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16 drop-shadow-2xl">
          7-Day Cyber Jumpstart: Crack Your First Hack
        </h2>
        
        <div className="bg-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-orange-500/30 shadow-2xl shadow-black/70">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 drop-shadow-lg">
                This is a shortcut.
              </h3>
              <div className="text-white/80 mb-8 leading-relaxed space-y-4">
                <p>
                  Before I created the 7-Day Cyber Jumpstart, I was already deep in the cybersecurity world — earning a solid income, working on high-stakes problems, and loving every second of it.
                </p>
                <p>
                  Then one day, a close friend came to me.
                </p>
                <p>
                  He said, "I want in. I want what you have. But I don't know where to start. I don't have a degree. I don't have a background in tech. I'm starting from zero."
                </p>
                <p>
                  So I started giving him things to practice — real-world exercises, mindset shifts, the basics of how hackers think, what threats look like, and how to take action.
                </p>
                <p className="text-blue-300 font-medium">
                  And that's when it hit me…
                </p>
                <p>
                  Breaking into cybersecurity doesn't need to be hard — it just needs to be real.
                </p>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/80 rounded-lg p-6 border border-white/20 shadow-2xl shadow-black/80 backdrop-blur-sm">
              <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded w-fit mb-4 shadow-lg font-medium">
                THE SHORTCUT
              </div>
              <div className="space-y-4 text-white/90">
                <p className="text-sm leading-relaxed">
                  "Forget the expensive bootcamps, long academic programs, and outdated theory."
                </p>
                <p className="text-sm leading-relaxed text-blue-300">
                  "If you're guided right, you can get your first hands-on experience in just 7 days."
                </p>
                <p className="text-sm leading-relaxed">
                  "You can crack your first hack, see how cyber works from the inside, and start down the path to a $100K–$200K career — without waiting years."
                </p>
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mt-6">
                  <p className="text-green-300 text-sm font-medium">
                    After testing it, refining it, and seeing my friend go from total beginner to confident first mission — I knew I had something powerful.
                  </p>
                  <p className="text-white/80 text-xs mt-2">
                    Now available for just $37.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
