import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const isActive = (path: string) => {
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme === "light" ? "light-mode" : "";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme === "light" ? "light-mode" : "";
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
    { path: "/gallery", label: "Photo Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "0 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        background: theme === "dark" ? "rgba(10, 10, 10, 0.9)" : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--glass-border)",
        height: "100px",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          zIndex: 1001,
          padding: "2px 0"
        }}
      >
        <img
          src={theme === "dark" ? logoDark : logoLight}
          alt="Capital Bridge"
          style={{
            height: "220px",
            width: "auto",
            objectFit: "contain",
            display: "block",
            position: "relative",
            top: theme === "dark" ? "0px" : "6px"
          }}
        />
      </Link>

      {/* Desktop Navigation Group */}
      <div className="nav-desktop" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
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
                    paddingTop: "1.5rem",
                    width: "260px",
                    animation: "fadeIn 0.2s ease-out",
                  }}
                >
                  <div
                    style={{
                      background: theme === "dark" ? "#111" : "#fff",
                      border: "1px solid var(--glass-border)",
                      borderRadius: "16px",
                      padding: "1rem",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        style={{
                          display: "block",
                          padding: "0.8rem 1.2rem",
                          textDecoration: "none",
                          color: "var(--text-main)",
                          fontSize: "0.9rem",
                          borderRadius: "10px",
                          transition: "all 0.2s ease",
                          fontWeight: location.pathname === item.path ? 700 : 400,
                          background:
                            location.pathname === item.path
                              ? "var(--glass-bg)"
                              : "transparent",
                        }}
                        onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "var(--glass-bg)")
                        }
                        onMouseLeave={(e) =>
                        (e.currentTarget.style.background =
                          location.pathname === item.path
                            ? "var(--glass-bg)"
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
        </div>

        {/* Premium Theme Toggle */}
        <div
          onClick={toggleTheme}
          style={{
            width: "60px",
            height: "30px",
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            padding: "0 5px",
            cursor: "pointer",
            position: "relative",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: theme === "dark" ? "32px" : "4px",
              width: "22px",
              height: "22px",
              background: "var(--color-accent)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 0 10px rgba(255, 215, 0, 0.4)",
            }}
          >
            {theme === "dark" ? <Moon size={12} color="#000" /> : <Sun size={12} color="#000" />}
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "0 4px", opacity: 0.3 }}>
            <Sun size={10} color="var(--text-main)" />
            <Moon size={10} color="var(--text-main)" />
          </div>
        </div>

        <a
          href="tel:8885758884"
          style={{
            padding: "0.8rem 1.5rem",
            background: "var(--color-accent)",
            color: "#000",
            textDecoration: "none",
            borderRadius: "100px",
            fontSize: "0.9rem",
            fontWeight: 800,
            transition: "all 0.3s ease",
            boxShadow: "0 10px 20px rgba(255, 215, 0, 0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 15px 25px rgba(255, 215, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 215, 0, 0.2)";
          }}
        >
          (888) 575-8884
        </a>
      </div>

      {/* Mobile Toggle Group */}
      <div style={{ display: "none" }} className="nav-mobile-controls">
        <div
          onClick={toggleTheme}
          style={{
            width: "50px",
            height: "26px",
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            padding: "0 4px",
            cursor: "pointer",
            position: "relative",
            marginRight: "1rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: theme === "dark" ? "26px" : "4px",
              width: "18px",
              height: "18px",
              background: "var(--color-accent)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
          >
            {theme === "dark" ? <Moon size={10} color="#000" /> : <Sun size={10} color="#000" />}
          </div>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-main)",
            cursor: "pointer",
            padding: "5px",
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
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "var(--bg-primary)",
            zIndex: 1000,
            padding: "120px 10% 40px",
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
                        onClick={() => setIsMobileMenuOpen(false)}
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
                  onClick={() => setIsMobileMenuOpen(false)}
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
          .nav-mobile-controls { display: flex !important; align-items: center; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
