import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<SVGSVGElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !truckRef.current || !maskRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire preloader container slightly before calling onComplete
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete
        });
      }
    });

    // We start the truck off-screen left (-200px) and move it to off-screen right (window.innerWidth + 200px)
    // As it moves, the mask (which is a solid color blocking the hero) shrinks from the left, acting as a wipe.
    
    // Set initial states
    gsap.set(truckRef.current, { x: -300 });
    gsap.set(maskRef.current, { width: '100%', right: 0 });

    tl.to(truckRef.current, {
      x: window.innerWidth + 300,
      duration: 1.5,
      ease: 'power2.inOut',
    }, 0);

    // The wipe effect (shrinking the solid mask as the truck drives)
    tl.to(maskRef.current, {
      width: '0%',
      duration: 1.5,
      ease: 'power2.inOut',
    }, 0);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      data-testid="preloader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* The solid wipe mask that covers the site */}
      <div 
        ref={maskRef}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100vh',
          backgroundColor: 'var(--bg-primary)',
          zIndex: 1,
        }}
      />
      
      {/* The sleek placeholder truck */}
      <svg 
        ref={truckRef}
        width="150" 
        height="80" 
        viewBox="0 0 150 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 2, position: 'absolute' }}
      >
        <path d="M10 20 H100 V70 H10 Z" fill="var(--color-accent)" fillOpacity="0.2" stroke="var(--color-accent)" strokeWidth="2"/>
        <path d="M100 40 L120 40 L140 50 V70 H100 Z" fill="var(--color-accent)" fillOpacity="0.1" stroke="var(--color-accent)" strokeWidth="2"/>
        <circle cx="30" cy="70" r="10" fill="var(--color-accent)"/>
        <circle cx="80" cy="70" r="10" fill="var(--color-accent)"/>
        <circle cx="120" cy="70" r="10" fill="var(--color-accent)"/>
        {/* Speed lines */}
        <path d="M-20 30 H0 M-40 50 H5 M-10 60 H15" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    </div>
  );
};

export default PreLoader;
