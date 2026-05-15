import HeroSection from '../components/HeroSection';
import BentoGrid from '../components/BentoGrid';
import StatsSection from '../components/StatsSection';
import AgentCarrierSection from '../components/AgentCarrierSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { siteContent } from '../data/content';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <BentoGrid />
      <ProcessSection />
      <AgentCarrierSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
