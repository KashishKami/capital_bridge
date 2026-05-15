import React from "react";
import { siteContent } from "../data/content";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="testimonials-section"
      style={{
        padding: "80px 5%",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", fontWeight: 900 }}>
          What Our Clients Say
        </h2>
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "var(--color-accent)",
            margin: "1rem auto",
          }}
        ></div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {siteContent.home.testimonials.map((t) => (
          <div
            key={t.id}
            className="testimonial-card"
            style={{
              padding: "2.5rem",
              background: "var(--glass-bg)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid var(--glass-border)",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease",
            }}
          >
            <div>
              <div
                style={{ display: "flex", gap: "4px", marginBottom: "1.5rem" }}
              >
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--color-accent)"
                    color="var(--color-accent)"
                  />
                ))}
              </div>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  marginBottom: "2rem",
                  color: "var(--text-main)",
                  lineHeight: "1.6",
                }}
              >
                "{t.text}"
              </p>
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                color: "var(--text-main)",
              }}
            >
              {t.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
