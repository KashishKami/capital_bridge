import { useEffect, useRef } from "react";
import { siteContent } from "../data/content";
import gsap from "gsap";

const AgentCarrierSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".program-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        x: (i) => (i === 0 ? -50 : 50),
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ padding: "10rem 5%", overflow: "hidden" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          className="program-card"
          style={{
            padding: "clamp(2rem, 8vw, 4rem)",
            background: "var(--glass-bg)",
            backdropFilter: "blur(10px)",
            border: "1px solid var(--glass-border)",
            borderRadius: "32px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              color: "var(--text-main)",
              textTransform: "uppercase",
              letterSpacing: "3px",
              display: "block",
              marginBottom: "1rem",
              opacity: 0.6,
            }}
          >
            Partnership
          </span>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 6vw, 3rem)",
              fontWeight: 900,
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            {siteContent.home.agent.title}
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              opacity: 0.8,
              marginBottom: "2.5rem",
            }}
          >
            {siteContent.home.agent.description}
          </p>
        </div>

        <div
          className="program-card"
          style={{
            padding: "clamp(2rem, 8vw, 4rem)",
            background: "var(--color-accent)",
            border: "1px solid var(--color-accent)",
            borderRadius: "32px",
            color: "#000",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "3px",
              display: "block",
              marginBottom: "1rem",
              opacity: 0.6,
            }}
          >
            Network
          </span>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 6vw, 3rem)",
              fontWeight: 900,
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            {siteContent.home.carrier.title}
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              fontWeight: 500,
              marginBottom: "2.5rem",
            }}
          >
            {siteContent.home.carrier.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgentCarrierSection;
