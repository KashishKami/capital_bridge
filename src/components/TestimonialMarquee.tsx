import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteContent } from '../data/content';
import { Star } from 'lucide-react';

const TestimonialMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const items = gsap.utils.toArray('.testimonial-card');
    
    // Duplicate items for seamless loop
    items.forEach((item: any) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    const totalWidth = track.scrollWidth / 2;

    const animation = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animation.kill();
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      className="testimonial-marquee"
      style={{ 
        padding: '80px 0', 
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>What Our Clients Say</h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '1rem auto' }}></div>
      </div>

      <div 
        ref={containerRef}
        style={{ 
          width: '100%', 
          overflow: 'hidden',
          display: 'flex'
        }}
      >
        <div 
          ref={trackRef}
          className="marquee-track"
          style={{ 
            display: 'flex',
            gap: '2rem',
            padding: '0 1rem'
          }}
        >
          {siteContent.home.testimonials.map((t) => (
            <div 
              key={t.id}
              className="testimonial-card"
              style={{
                minWidth: '400px',
                padding: '2.5rem',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                ))}
              </div>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                "{t.text}"
              </p>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-main)' }}>
                {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
