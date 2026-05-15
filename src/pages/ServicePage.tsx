import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { siteContent } from "../data/content";
import gsap from "gsap";

const ServicePage = ({ type }: { type: "solutions" | "industries" }) => {
  const { id } = useParams<{ id: string }>();
  const containerRef = useRef<HTMLDivElement>(null);

  const content = id ? siteContent[type][id] : null;

  useEffect(() => {
    if (content) {
      const ctx = gsap.context(() => {
        gsap.from(".reveal-text", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        gsap.from(".reveal-card", {
          scale: 0.95,
          opacity: 0,
          duration: 1,
          delay: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [content]);

  if (!content) {
    return (
      <div
        style={{
          padding: "15vh 5%",
          textAlign: "center",
          color: "var(--text-main)",
        }}
      >
        <h1>Page Not Found</h1>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        padding: "15vh 5%",
        minHeight: "100vh",
        color: "var(--text-main)",
      }}
    >
      <header style={{ maxWidth: "800px", marginBottom: "4rem" }}>
        <h1
          className="reveal-text"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: 900,
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          {content.title}
        </h1>
        <p
          className="reveal-text"
          style={{ fontSize: "1.2rem", opacity: 0.8, lineHeight: 1.6 }}
        >
          {content.description}
        </p>
      </header>

      {content.highlights && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginTop: "4rem",
          }}
        >
          {content.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="reveal-card"
              style={{
                padding: "1.5rem",
                background: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--glass-border)",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                {highlight}
              </h3>
            </div>
          ))}
        </div>
      )}

      {content.features && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "4rem",
          }}
        >
          {content.features.map((feature) => (
            <div
              key={feature.id}
              className="reveal-card"
              style={{
                padding: "2rem",
                background: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--glass-border)",
                borderRadius: "16px",
                transition: "transform 0.3s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  color: "var(--color-accent)",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ opacity: 0.8, lineHeight: 1.5 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Verbatim Common Pillars (Technology, Quotes, Support) */}
      <section
        style={{
          marginTop: "8rem",
          borderTop: "1px solid var(--glass-border)",
          paddingTop: "4rem",
        }}
      >
        <h2
          className="reveal-text"
          style={{ fontSize: "2rem", marginBottom: "3rem" }}
        >
          Standard Excellence
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {siteContent.home.features.map((f) => (
            <div key={f.id} className="reveal-card">
              <h4 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                {f.title}
              </h4>
              <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={{ 
        marginTop: '8rem', 
        padding: '5rem', 
        background: 'var(--bg-secondary)', 
        borderRadius: '32px',
        textAlign: 'center',
        border: '1px solid var(--glass-border)'
      }} className="reveal-card">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to optimize your supply chain?</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Connect with our experts today for a customized quote tailored to your business needs.
        </p>
        <Link to="/contact">
          <button style={{
            padding: '1rem 3rem',
            background: 'var(--color-accent)',
            color: '#000',
            border: 'none',
            borderRadius: '100px',
            fontSize: '1.1rem',
            fontWeight: 800,
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default ServicePage;
