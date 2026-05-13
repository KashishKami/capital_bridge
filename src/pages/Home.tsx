import HeroSection from '../components/HeroSection';
import BentoGrid from '../components/BentoGrid';
import StatsSection from '../components/StatsSection';
import AgentCarrierSection from '../components/AgentCarrierSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialMarquee from '../components/TestimonialMarquee';
import { siteContent } from '../data/content';

const Home = () => {
  return (
    <main>
      <HeroSection />
      
      {/* Dynamic Trust Headline */}
      <section style={{ padding: '4rem 5%', textAlign: 'center', background: 'var(--bg-main)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, opacity: 0.8, maxWidth: '900px', margin: '0 auto', lineHeight: 1.3 }}>
          {siteContent.home.hero.headline}
        </h2>
      </section>

      <StatsSection />
      <BentoGrid />
      <ProcessSection />
      <AgentCarrierSection />
      <TestimonialMarquee />
    </main>
  );
};

export default Home;
