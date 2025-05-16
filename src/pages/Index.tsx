
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import BrightFutureSection from "@/components/Sections/BrightFutureSection";
import ProductFeaturesSection from "@/components/Sections/ProductFeaturesSection";
import ScalableBusinessSection from "@/components/Sections/ScalableBusinessSection";
import AboutSection from "@/components/Sections/AboutSection";
import TeamSection from "@/components/Sections/TeamSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection";
import ContactSection from "@/components/Sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BrightFutureSection />
        <ProductFeaturesSection />
        <ScalableBusinessSection />
        <AboutSection />
        <ProductFeaturesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
