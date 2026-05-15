import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "../data/content";
import BentoCard from "./BentoCard";

gsap.registerPlugin(ScrollTrigger);

const BentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || cardsRef.current.length === 0) return;

    // We animate the cards into view when the container enters the viewport
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Trigger when the top of container hits 80% of viewport
        toggleActions: "play none none reverse", // Play forward on enter, reverse on leave back
      },
    });

    // Initial state: hidden and slightly pushed down
    gsap.set(cardsRef.current, { opacity: 0, y: 100 });

    tl.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        ref={containerRef}
        data-testid="bento-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {siteContent.home.features.map((feature, idx) => (
          <div
            key={feature.id}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            style={{ flex: "1 1 300px", maxWidth: "380px" }}
          >
            <BentoCard feature={feature} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
