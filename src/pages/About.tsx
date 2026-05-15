import { useEffect, useRef } from "react";
import { siteContent } from "../data/content";
import { Link } from "react-router-dom";
import gsap from "gsap";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        padding: "20vh 5%",
        minHeight: "100vh",
        color: "var(--text-main)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          className="reveal-text"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: 900,
            marginBottom: "2rem",
            lineHeight: 1,
          }}
        >
          {siteContent.about.title}
        </h1>
        <p
          className="reveal-text"
          style={{
            fontSize: "1.5rem",
            lineHeight: 1.6,
            opacity: 0.9,
            marginBottom: "4rem",
          }}
        >
          {siteContent.about.description}
        </p>

        <div
          className="reveal-text"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "4rem",
            marginTop: "6rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                marginBottom: "1rem",
                color: "var(--color-accent)",
              }}
            >
              Our Mission
            </h3>
            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
              To provide small and medium shippers with the technology and
              expertise needed to compete on a global scale.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                marginBottom: "1rem",
                color: "var(--color-accent)",
              }}
            >
              Our Velocity
            </h3>
            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
              Crossing 1000+ shipments as of Aug 2022, we are scaling rapidly to
              become the best in the freight industry.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-text" style={{ marginTop: "8rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>
            Want to work with us?
          </h2>
          <Link to="/contact">
            <button
              style={{
                padding: "1rem 3rem",
                background: "var(--color-accent)",
                color: "#000",
                border: "none",
                borderRadius: "100px",
                fontSize: "1.1rem",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Contact Our Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
