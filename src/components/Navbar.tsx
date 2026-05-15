import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { 
      label: 'Solutions', 
      path: '/solutions',
      dropdown: [
        { path: '/solutions/ltl', label: 'LTL' },
        { path: '/solutions/truck-load', label: 'Truck Load' },
        { path: '/solutions/expedite', label: 'Expedite' },
        { path: '/solutions/freight-management', label: 'Freight Management' },
      ]
    },
    { 
      label: 'Services', 
      path: '/services',
      dropdown: [
        { path: '/services/industries', label: 'Industries' },
        { path: '/services/automotive', label: 'Automotive' },
        { path: '/services/manufacturing', label: 'Manufacturing' },
        { path: '/services/retail', label: 'Retail' },
        { path: '/services/telecommunications', label: 'Telecommunications' },
        { path: '/services/paper-packaging', label: 'Paper & Packaging' },
      ]
    },
    { path: '/about', label: 'About' },
    { path: '/our-team', label: 'Our Team' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.2rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        borderBottom: '1px solid var(--glass-border)',
      }}
    >
      <Link 
        to="/" 
        style={{ 
          fontSize: '1.6rem', 
          fontWeight: 900, 
          color: 'var(--text-main)', 
          textDecoration: 'none',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-1px'
        }}
      >
        <img src={logo} alt="Capital Bridge" style={{ height: '45px', width: 'auto', display: 'block' }} />
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <div 
            key={link.label} 
            style={{ position: 'relative' }}
            onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {link.dropdown ? (
              <span
                style={{
                  cursor: 'pointer',
                  color: 'var(--text-main)',
                  fontWeight: isActive(link.path) ? 700 : 500,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  paddingBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {link.label}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.3s ease', transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none' }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            ) : (
              <Link
                to={link.path}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  fontWeight: isActive(link.path) ? 700 : 500,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  paddingBottom: '4px',
                  borderBottom: isActive(link.path) ? '2px solid var(--color-accent)' : '2px solid transparent',
                }}
              >
                {link.label}
              </Link>
            )}

            {link.dropdown && activeDropdown === link.label && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  paddingTop: '1rem',
                  width: '240px',
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                <div
                  style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '0.8rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      style={{
                        display: 'block',
                        padding: '0.8rem 1rem',
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem',
                        borderRadius: '8px',
                        transition: 'background 0.2s ease',
                        fontWeight: location.pathname === item.path ? 700 : 400,
                        background: location.pathname === item.path ? 'var(--glass-border)' : 'transparent'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--glass-border)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = location.pathname === item.path ? 'var(--glass-border)' : 'transparent')}
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
            padding: '0.6rem 1.2rem',
            background: 'var(--color-accent)',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '100px',
            fontSize: '0.9rem',
            fontWeight: 800,
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          (888) 575-8884
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
