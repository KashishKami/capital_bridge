import React from "react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/content";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-main)",
        padding: "100px 5% 40px",
        borderTop: "1px solid var(--glass-border)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "4rem",
          marginBottom: "4rem",
        }}
      >
        {/* Brand Column */}
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                marginBottom: "1.5rem",
                fontFamily: "var(--font-heading)",
                color: "var(--text-main)",
              }}
            >
              Capital Bridge LLC
            </h2>
          </Link>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: "1.8",
              maxWidth: "300px",
            }}
          >
            Transforming logistics with cutting-edge technology and unparalleled
            service. Your bridge to global supply chain success.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "var(--text-main)",
            }}
          >
            IMPORTANT LINKS
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Link
              to="/solutions/ltl"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                width: "fit-content",
              }}
            >
              LTL
            </Link>
            <Link
              to="/solutions/truck-load"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                width: "fit-content",
              }}
            >
              Truck Load
            </Link>
            <Link
              to="/solutions/expedite"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                width: "fit-content",
              }}
            >
              Expedite
            </Link>
            <Link
              to="/privacy-policy"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                width: "fit-content",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                width: "fit-content",
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "var(--text-main)",
            }}
          >
            Contact Us
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: "var(--text-muted)",
              }}
            >
              <Mail size={18} color="var(--color-accent)" />
              <a href={`mailto:${siteContent.home.contact.email}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                {siteContent.home.contact.email}
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: "var(--text-muted)",
              }}
            >
              <Phone size={18} color="var(--color-accent)" />
              <a href={`tel:${siteContent.home.contact.phone.replace(/\D/g, "")}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                {siteContent.home.contact.phone}
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: "var(--text-muted)",
              }}
            >
              <MapPin size={18} color="var(--color-accent)" />
              <span>{siteContent.home.contact.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Big Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          right: "5%",
          fontSize: "clamp(3rem, 10vw, 8rem)",
          fontWeight: 900,
          opacity: 0.03,
          pointerEvents: "none",
          lineHeight: 1,
          fontFamily: "var(--font-heading)",
          whiteSpace: "nowrap",
        }}
      >
        CAPITAL BRIDGE LLC
      </div>

      <div
        style={{
          borderTop: "1px solid var(--glass-border)",
          paddingTop: "2rem",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
        }}
      >
        © 2026 Capital Bridge LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
