
"use client";

import { Button } from "@/components/ui/button";
import { Facebook, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-blue-500/30 shadow-2xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/f033307a-a0ad-4fc1-becf-0371a7f8e6f8.png" alt="CyberDraft.AI Logo" className="w-8 h-8" />
              {/* Hide text logo on mobile, show on md and up */}
              <div className="hidden md:block text-white font-bold text-xl drop-shadow-lg">CyberDraft.AI</div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {pathname === '/' ? (
                <>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md hover:drop-shadow-lg"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('process')}
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md hover:drop-shadow-lg"
                  >
                    Process
                  </button>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md hover:drop-shadow-lg"
                  >
                    Testimonials
                  </button>
                  <button 
                    onClick={() => scrollToSection('community')}
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md hover:drop-shadow-lg"
                  >
                    Community
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/"
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md hover:drop-shadow-lg"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/#features"
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md hover:drop-shadow-lg"
                  >
                    Features
                  </Link>
                  <Link 
                    href="/#process"
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md hover:drop-shadow-lg"
                  >
                    Process
                  </Link>
                  <Link 
                    href="/#testimonials"
                    className="text-white/80 hover:text-white transition-colors drop-shadow-md hover:drop-shadow-lg"
                  >
                    Testimonials
                  </Link>
                </>
              )}
              <Link 
                href="/blog"
                className={`transition-colors drop-shadow-md hover:drop-shadow-lg ${
                  pathname.startsWith('/blog') 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Blog
              </Link>
            </nav>
          </div>
          
          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              {/* Facebook Button */}
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg text-sm"
                onClick={() => window.open('https://www.facebook.com/share/g/1CNaskQy22/', '_blank')}
              >
                <Facebook size={16} className="text-white" />
                <span>Facebook</span>
                <span className="text-blue-200 text-xs">Join community</span>
              </Button>
            </div>
            
            <Button 
              className="bg-gray-600 hover:bg-gray-700 text-white shadow-lg border border-gray-400/30 flex items-center gap-2"
              onClick={() => window.open('https://membership.cyberdraft.ai', '_blank')}
            >
              <LogIn size={16} />
              Login
            </Button>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 border border-blue-400/30"
              onClick={() => window.open('https://join.cyberdraft.ai/order-form', '_blank')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-blue-500/30">
            <nav className="flex flex-col space-y-4 pt-4">
              {pathname === '/' ? (
                <>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('process')}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Process
                  </button>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Testimonials
                  </button>
                  <button 
                    onClick={() => scrollToSection('community')}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    Community
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/"
                    className="text-white/80 hover:text-white transition-colors text-left"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/#features"
                    className="text-white/80 hover:text-white transition-colors text-left"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    href="/#process"
                    className="text-white/80 hover:text-white transition-colors text-left"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Process
                  </Link>
                  <Link 
                    href="/#testimonials"
                    className="text-white/80 hover:text-white transition-colors text-left"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </>
              )}
              <Link 
                href="/blog"
                className={`transition-colors text-left ${
                  pathname.startsWith('/blog') 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center gap-2 shadow-lg text-sm w-full"
                  onClick={() => window.open('https://www.facebook.com/share/g/1CNaskQy22/', '_blank')}
                >
                  <Facebook size={16} className="text-white" />
                  <span>Join Facebook Community</span>
                </Button>
                
                <Button 
                  className="bg-gray-600 hover:bg-gray-700 text-white shadow-lg border border-gray-400/30 flex items-center justify-center gap-2 w-full"
                  onClick={() => window.open('https://membership.cyberdraft.ai', '_blank')}
                >
                  <LogIn size={16} />
                  Login
                </Button>
                
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-500/40 transition-all duration-300 border border-blue-400/30 w-full"
                  onClick={() => window.open('https://join.cyberdraft.ai/order-form', '_blank')}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
