import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/content";
import gsap from "gsap";

const ProcessStep = ({ step, idx }: { step: { title: string }; idx: number }) => {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      borderColor: "var(--color-accent)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      borderColor: "var(--glass-border)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="process-step"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: "clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        borderRadius: "24px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        cursor: "default",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Subtle background glow when hovered */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at center, rgba(255, 215, 0, 0.05) 0%, transparent 70%)",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "var(--color-accent)",
          color: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
          fontWeight: 900,
          fontSize: "1.2rem",
          zIndex: 2,
        }}
      >
        {idx + 1}
      </div>
      <h4 style={{ fontSize: "clamp(1.1rem, 4vw, 1.5rem)", fontWeight: 800, zIndex: 2 }}>
        {step.title}
      </h4>
    </div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "8rem 5%", background: "var(--bg-main)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ marginBottom: "5rem", textAlign: "center" }}>
          <h3
            style={{
              color: "var(--text-main)",
              opacity: 0.6,
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontWeight: 800,
              fontSize: "0.9rem",
              marginBottom: "1rem",
            }}
          >
            Our Service
          </h3>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900 }}>
            Logistics Solutions
          </h2>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "clamp(1rem, 3vw, 2rem)",
          }}
        >
          {siteContent.home.process.map((step, idx) => (
            <ProcessStep key={idx} step={step} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
