import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CurriculumSection from '@/components/CurriculumSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StickyWhatsAppCTA from '@/components/StickyWhatsAppCTA';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <StickyWhatsAppCTA />
        <HeroSection />
        <AboutSection />
        <CurriculumSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection/>
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
    