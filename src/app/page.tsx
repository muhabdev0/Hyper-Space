import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import FeaturesSection from '@/components/sections/features';
import AboutSection from '@/components/sections/about';
import ShowcaseSection from '@/components/sections/showcase';
import AiToolSection from '@/components/sections/ai-tool';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ShowcaseSection />
        <AiToolSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
