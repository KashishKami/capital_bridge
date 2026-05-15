import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/content";
import gsap from "gsap";

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
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
      <header style={{ maxWidth: "800px", marginBottom: "5rem" }}>
        <h1
          className="reveal-item"
          style={{
            fontSize: "clamp(3rem, 10vw, 5rem)",
            fontWeight: 900,
            marginBottom: "1.5rem",
          }}
        >
          {siteContent.industries.industries.title}
        </h1>
        <p
          className="reveal-item"
          style={{ fontSize: "1.2rem", opacity: 0.8, lineHeight: 1.6 }}
        >
          {siteContent.industries.industries.description}
        </p>
      </header>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {Object.entries(siteContent.industries)
          .filter(([key]) => key !== "industries")
          .map(([key, industry]) => (
            <Link
              key={key}
              to={`/services/${key}`}
              className="reveal-item"
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "3rem 2rem",
                background: "var(--glass-bg)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--glass-border)",
                borderRadius: "24px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: "1 1 300px",
                maxWidth: "400px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--glass-border)";
                e.currentTarget.style.background = "var(--glass-bg)";
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    marginBottom: "1rem",
                  }}
                >
                  {industry.title}
                </h3>
                <p
                  style={{
                    opacity: 0.6,
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {industry.description}
                </p>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  color: "var(--color-accent)",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Learn More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Services;
