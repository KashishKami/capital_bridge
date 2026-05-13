import { useEffect, useRef } from 'react';
import { siteContent } from '../data/content';
import gsap from 'gsap';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '8rem 5%', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--text-main)', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 800, fontSize: '0.9rem', marginBottom: '1rem' }}>Our Service</h3>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900 }}>Logistics Solutions</h2>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {siteContent.home.process.map((step, idx) => (
            <div 
              key={idx} 
              className="process-step"
              style={{ 
                padding: '3rem 2rem', 
                background: 'var(--glass-bg)', 
                border: '1px solid var(--glass-border)',
                borderRadius: '24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'var(--color-accent)', 
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                fontWeight: 900,
                fontSize: '1.2rem'
              }}>
                {idx + 1}
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
