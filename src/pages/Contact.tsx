import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Link,
  ExternalLink,
  Clock,
} from "lucide-react";
import { siteContent } from "../data/content";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message. We will get back to you shortly!");
  };

  return (
    <main
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-main)",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "160px 5% 80px",
          textAlign: "center",
          background:
            "linear-gradient(to bottom, rgba(255, 215, 0, 0.05) 0%, transparent 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            marginBottom: "1.5rem",
          }}
        >
          Contact Us
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-muted)",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Get in touch with our team for customized logistics solutions. Whether
          you have a question about pricing, services, or anything else, our
          team is ready to answer all your questions.
        </p>
      </section>

      {/* Contact Content */}
      <section
        style={{ padding: "0 5% 100px", maxWidth: "1400px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              background: "var(--bg-secondary)",
              padding: "3rem",
              borderRadius: "32px",
              border: "1px solid var(--glass-border)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "2rem",
                fontWeight: 800,
              }}
            >
              Send us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    style={inputStyle}
                    required
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  style={inputStyle}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Inquiry about LTL Services"
                  style={inputStyle}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                  }}
                >
                  Your Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  style={{
                    ...inputStyle,
                    minHeight: "150px",
                    resize: "vertical",
                  }}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  padding: "1.2rem",
                  background: "var(--color-accent)",
                  color: "#000",
                  border: "none",
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  marginTop: "1rem",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                Submit Form
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            <div>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "2rem",
                  fontWeight: 800,
                }}
              >
                Contact Information
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <div style={infoBlockStyle}>
                  <div style={iconBoxStyle}>
                    <Phone size={24} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h3 style={infoTitleStyle}>Phone Number</h3>
                    <a href={`tel:${siteContent.home.contact.phone.replace(/\D/g, "")}`} style={infoTextStyle}>
                      {siteContent.home.contact.phone}
                    </a>
                  </div>
                </div>
                <div style={infoBlockStyle}>
                  <div style={iconBoxStyle}>
                    <Mail size={24} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h3 style={infoTitleStyle}>Email Addresses</h3>
                    <p style={infoTextStyle}>
                      <strong>General:</strong>{" "}
                      <a href={`mailto:${siteContent.home.contact.email}`} style={infoLinkStyle}>
                        {siteContent.home.contact.email}
                      </a>
                    </p>
                    <p style={infoTextStyle}>
                      <strong>Accounting:</strong>{" "}
                      <a href={`mailto:${siteContent.home.contact.accounting_email}`} style={infoLinkStyle}>
                        {siteContent.home.contact.accounting_email}
                      </a>
                    </p>
                  </div>
                </div>
                <div style={infoBlockStyle}>
                  <div style={iconBoxStyle}>
                    <MapPin size={24} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h3 style={infoTitleStyle}>Our Office</h3>
                    <p style={infoTextStyle}>
                      {siteContent.home.contact.address}
                    </p>
                  </div>
                </div>
                <div style={infoBlockStyle}>
                  <div style={iconBoxStyle}>
                    <Clock size={24} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h3 style={infoTitleStyle}>Business Hours</h3>
                    <p style={infoTextStyle}>
                      {siteContent.home.contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  fontWeight: 800,
                }}
              >
                Professional Links
              </h2>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href={siteContent.home.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                >
                  <Link size={20} /> LinkedIn Profile
                </a>
                <a
                  href={siteContent.home.contact.dat_directory}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                >
                  <ExternalLink size={20} /> DAT Directory
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        style={{
          width: "100%",
          height: "500px",
          filter: "grayscale(1) invert(0.9)",
        }}
      >
        <iframe
          title="Capital Bridge Logistics Office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.508573426177!2d-87.8286286!3d42.0673331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc858c8945625%3A0xc47e3a9c72e2d93e!2s1478%20Monterey%20Dr%2C%20Glenview%2C%20IL%2060026!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

// Styles
const inputStyle = {
  padding: "1rem",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid var(--glass-border)",
  borderRadius: "12px",
  color: "var(--text-main)",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const infoBlockStyle = {
  display: "flex",
  gap: "1.5rem",
  alignItems: "flex-start",
};

const iconBoxStyle = {
  padding: "1rem",
  background: "var(--glass-bg)",
  borderRadius: "16px",
  border: "1px solid var(--glass-border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const infoTitleStyle = {
  fontSize: "1.1rem",
  fontWeight: 700,
  marginBottom: "0.3rem",
  color: "var(--text-main)",
};

const infoTextStyle = {
  color: "var(--text-muted)",
  lineHeight: "1.5",
  fontSize: "1rem",
};

const socialLinkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  padding: "0.8rem 1.5rem",
  background: "var(--glass-bg)",
  border: "1px solid var(--glass-border)",
  borderRadius: "100px",
  color: "var(--text-main)",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 600,
  transition: "all 0.2s ease",
};

const infoLinkStyle = {
  ...infoTextStyle,
  textDecoration: "none",
  color: "var(--color-accent)",
  fontWeight: 600,
};

export default Contact;
