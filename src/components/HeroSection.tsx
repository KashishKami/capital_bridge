import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { siteContent } from '../data/content';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Staggered reveal animation
    const tl = gsap.timeline();

    tl.fromTo(
      [headingRef.current, subRef.current, buttonRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        position: 'relative',
        overflow: 'hidden',
        // Fallback gradient just in case we don't add the video yet
        background: 'linear-gradient(135deg, var(--color-primary-navy) 0%, #061020 100%)',
      }}
    >
      <div style={{ maxWidth: '800px', zIndex: 10 }}>
        <h1 
          ref={headingRef}
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-main)',
          }}
        >
          {siteContent.home.hero.headline}
        </h1>
        <p 
          ref={subRef}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
          }}
        >
          {siteContent.home.hero.subheadline}
        </p>
        <button
          ref={buttonRef}
          className="magnetic-btn"
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--bg-primary)',
            backgroundColor: 'var(--color-accent)',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          Get a Quote
        </button>
      </div>

      {/* Ambient background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
};

export default HeroSection;
