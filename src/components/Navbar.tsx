import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    {
      label: "Solutions",
      path: "/solutions",
      dropdown: [
        { path: "/solutions/ltl", label: "LTL" },
        { path: "/solutions/truck-load", label: "Truck Load" },
        { path: "/solutions/expedite", label: "Expedite" },
        { path: "/solutions/freight-management", label: "Freight Management" },
      ],
    },
    {
      label: "Services",
      path: "/services",
      dropdown: [
        { path: "/services/industries", label: "Industries" },
        { path: "/services/automotive", label: "Automotive" },
        { path: "/services/manufacturing", label: "Manufacturing" },
        { path: "/services/retail", label: "Retail" },
        { path: "/services/telecommunications", label: "Telecommunications" },
        { path: "/services/paper-packaging", label: "Paper & Packaging" },
      ],
    },
    { path: "/about", label: "About" },
    { path: "/our-team", label: "Our Team" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "1.2rem 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        background: "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderBottom: "1px solid var(--glass-border)",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "1.6rem",
          fontWeight: 900,
          color: "var(--text-main)",
          textDecoration: "none",
          fontFamily: "var(--font-heading)",
          letterSpacing: "-1px",
          zIndex: 1001,
        }}
      >
        <img
          src={logo}
          alt="Capital Bridge"
          style={{ height: "40px", width: "auto", display: "block" }}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {navLinks.map((link) => (
          <div
            key={link.label}
            style={{ position: "relative" }}
            onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {link.dropdown ? (
              <span
                style={{
                  cursor: "pointer",
                  color: "var(--text-main)",
                  fontWeight: isActive(link.path) ? 700 : 500,
                  fontSize: "0.95rem",
                  transition: "all 0.2s ease",
                  paddingBottom: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {link.label}
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      activeDropdown === link.label ? "rotate(180deg)" : "none",
                  }}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <Link
                to={link.path}
                style={{
                  textDecoration: "none",
                  color: "var(--text-main)",
                  fontWeight: isActive(link.path) ? 700 : 500,
                  fontSize: "0.95rem",
                  transition: "all 0.2s ease",
                  paddingBottom: "4px",
                  borderBottom: isActive(link.path)
                    ? "2px solid var(--color-accent)"
                    : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            )}

            {link.dropdown && activeDropdown === link.label && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  paddingTop: "1rem",
                  width: "240px",
                  animation: "fadeIn 0.2s ease-out",
                }}
              >
                <div
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255, 215, 0, 0.2)",
                    borderRadius: "12px",
                    padding: "0.8rem",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      style={{
                        display: "block",
                        padding: "0.8rem 1rem",
                        textDecoration: "none",
                        color: "var(--text-main)",
                        fontSize: "0.9rem",
                        borderRadius: "8px",
                        transition: "background 0.2s ease",
                        fontWeight: location.pathname === item.path ? 700 : 400,
                        background:
                          location.pathname === item.path
                            ? "rgba(255, 215, 0, 0.1)"
                            : "transparent",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255, 215, 0, 0.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background =
                          location.pathname === item.path
                            ? "rgba(255, 215, 0, 0.1)"
                            : "transparent")
                      }
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <a
          href="tel:8885758884"
          style={{
            padding: "0.6rem 1.2rem",
            background: "var(--color-accent)",
            color: "#000",
            textDecoration: "none",
            borderRadius: "100px",
            fontSize: "0.85rem",
            fontWeight: 800,
            transition: "transform 0.2s ease",
            marginLeft: "1rem"
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          (888) 575-8884
        </a>
      </div>

      {/* Hamburger Icon */}
      <button
        className="nav-mobile-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "var(--text-main)",
          cursor: "pointer",
          zIndex: 1001,
          padding: "5px"
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "#0a0a0a",
            zIndex: 1000,
            padding: "100px 10% 40px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            overflowY: "auto",
          }}
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ 
                    color: "var(--color-accent)", 
                    fontWeight: 700, 
                    fontSize: "1.2rem",
                    marginBottom: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>
                    {link.label}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingLeft: "1rem", borderLeft: "1px solid var(--glass-border)" }}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        style={{
                          textDecoration: "none",
                          color: location.pathname === item.path ? "var(--color-accent)" : "var(--text-main)",
                          fontSize: "1.1rem",
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  style={{
                    textDecoration: "none",
                    color: isActive(link.path) ? "var(--color-accent)" : "var(--text-main)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <a
            href="tel:8885758884"
            style={{
              padding: "1rem",
              background: "var(--color-accent)",
              color: "#000",
              textDecoration: "none",
              borderRadius: "12px",
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: 800,
              marginTop: "2rem"
            }}
          >
            Call Us: (888) 575-8884
          </a>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
