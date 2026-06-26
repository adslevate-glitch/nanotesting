import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import MarqueeSection from './components/MarqueeSection';
import PropertySearch from './components/PropertySearch';
import FeaturedProperty from './components/FeaturedProperty';
import WhySection from './components/WhySection';
import DestinationsSection from './components/DestinationsSection';
import LifestyleSection from './components/LifestyleSection';
import VideoSection from './components/VideoSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTABanner from './components/CTABanner';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <MarqueeSection />
      <PropertySearch />
      <FeaturedProperty />
      <WhySection />
      <DestinationsSection />
      <LifestyleSection />
      <VideoSection />
      <TestimonialsSection />
      <CTABanner />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
