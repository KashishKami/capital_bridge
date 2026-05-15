import { useEffect, useRef } from "react";
import { siteContent } from "../data/content";
import { Link } from "react-router-dom";
import gsap from "gsap";

const TeamPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".team-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        padding: "15vh 5%",
        minHeight: "100vh",
        color: "var(--text-main)",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "6rem" }}>
        <h1
          className="reveal-title"
          style={{
            fontSize: "clamp(3rem, 10vw, 5rem)",
            fontWeight: 900,
            marginBottom: "1rem",
          }}
        >
          Our Team
        </h1>
        <p
          className="reveal-title"
          style={{ fontSize: "1.2rem", opacity: 0.8 }}
        >
          Your Trusted Freight Advisors
        </p>
      </header>

      <div
        className="team-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2.5rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {siteContent.team.map((member) => (
          <div
            key={member.id}
            className="team-card"
            style={{
              padding: "2.5rem",
              background: "var(--glass-bg)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--glass-border)",
              borderRadius: "24px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "var(--color-accent)",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "1.5rem",
              }}
            >
              {member.name.charAt(0)}
            </div>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                marginBottom: "0.2rem",
              }}
            >
              {member.name}
            </h2>
            <p
              style={{
                color: "var(--color-accent)",
                fontWeight: 600,
                marginBottom: "1.5rem",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {member.role}
            </p>

            <div
              style={{
                width: "100%",
                textAlign: "left",
                marginTop: "auto",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--glass-border)",
                fontSize: "0.95rem",
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                <span style={{ opacity: 0.5 }}>Phone:</span>{" "}
                <a href={`tel:${member.phone.replace(/\D/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {member.phone}
                </a>
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <span style={{ opacity: 0.5 }}>Ext:</span> {member.extension}
              </div>
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ opacity: 0.5 }}>Email:</span>{" "}
                <a href={`mailto:${member.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal-title" style={{ marginTop: '8rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Need to speak with a specific manager?</h2>
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
            Send a Message
          </button>
        </Link>
      </div>


      <style>{`
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
