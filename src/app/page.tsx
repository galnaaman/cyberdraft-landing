import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCardsSection from "@/components/FeatureCardsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import CollaborationSection from "@/components/CollaborationSection";
import TestimonialSection from "@/components/TestimonialSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Cybersecurity-themed background with blue/cyan gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 opacity-90"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_70%)]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main role="main">
          <section aria-label="Hero section - Cybersecurity career training">
            <HeroSection />
          </section>
          
          <section aria-label="Course features and hands-on training">
            <FeatureCardsSection />
          </section>
          
          <section aria-label="Benefits of cybersecurity training">
            <BenefitsSection />
          </section>
          
          <section aria-label="Training process and methodology">
            <ProcessSection />
          </section>
          
          <section aria-label="Collaboration and community">
            <CollaborationSection />
          </section>
          
          <section aria-label="Student testimonials and success stories">
            <TestimonialSection />
          </section>
          
          <section aria-label="Cybersecurity community and networking">
            <CommunitySection />
          </section>
          
          <section aria-label="Call to action - Start your cybersecurity journey">
            <CTASection />
          </section>
        </main>
      </div>
    </div>
  );
}
