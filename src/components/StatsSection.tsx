import { useEffect, useRef } from 'react';
import { siteContent } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal Animation (Stagger)
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        onStart: () => {
          // 2. Start Number Counter Animations
          animateNumbers();
        }
      });

      // Animation for the bottom headline
      gsap.from('.stats-headline', {
        scrollTrigger: {
          trigger: '.stats-headline',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    const animateNumbers = () => {
      const statItems = document.querySelectorAll('.stat-value');
      statItems.forEach((el: any) => {
        const targetValue = el.getAttribute('data-target');
        const match = targetValue.match(/(\d+)(.*)/);
        if (!match) return;

        const endValue = parseInt(match[1]);
        const suffix = match[2];
        const obj = { val: 0 };

        gsap.to(obj, {
          val: endValue,
          duration: 2,
          ease: 'power3.out',
          onUpdate: () => {
            el.innerText = Math.floor(obj.val) + suffix;
          }
        });
      });
    };
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      style={{ 
        padding: '8rem 5%', 
        background: 'var(--bg-main)',
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)',
        position: 'relative'
      }}
    >
      <div 
        ref={statsContainerRef}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '5rem'
        }}
      >
        {siteContent.home.stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <h2 
              className="stat-value"
              data-target={stat.value}
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: 900, 
                color: 'var(--text-main)',
                marginBottom: '0.5rem',
                letterSpacing: '-2px'
              }}
            >
              0
            </h2>
            <p style={{ 
              fontSize: '0.9rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              fontWeight: 700,
              opacity: 0.6
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Trust Headline Integrated into Stats Section */}
      <div className="stats-headline" style={{ textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
          fontWeight: 800, 
          opacity: 0.8, 
          maxWidth: '900px', 
          margin: '0 auto', 
          lineHeight: 1.3,
          color: 'var(--text-main)'
        }}>
          {siteContent.home.statsHeadline}
        </h2>
      </div>
    </section>
  );
};

export default StatsSection;
