
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ActionsSection from '@/components/ActionsSection';
import OrganizationSection from '@/components/OrganizationSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ActionsSection />
      <OrganizationSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
