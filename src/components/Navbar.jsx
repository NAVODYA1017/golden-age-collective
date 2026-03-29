import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() { setScrolled(window.scrollY > 50); }
    window.addEventListener("scroll", handleScroll);
    return function() { window.removeEventListener("scroll", handleScroll); };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.96)",
        borderBottom: "0.5px solid rgba(201,168,76,0.25)",
        backdropFilter: "blur(12px)",
        transition: "all 0.4s ease",
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="2.5" fill="#c9a84c" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="1"    transform="rotate(0 20 20)" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="0.45" transform="rotate(40 20 20)" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="1"    transform="rotate(80 20 20)" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="0.45" transform="rotate(120 20 20)" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="1"    transform="rotate(160 20 20)" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="0.45" transform="rotate(200 20 20)" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="1"    transform="rotate(240 20 20)" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="0.45" transform="rotate(280 20 20)" />
            <ellipse cx="20" cy="13" rx="1.4" ry="5.5" fill="#c9a84c" opacity="1"    transform="rotate(320 20 20)" />
          </svg>
          <span style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "10px", fontWeight: 500,
            letterSpacing: "0.18em", color: "#b8933e",
          }}>GOLDEN AGE COLLECTIVE</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul style={{
          display: "flex", gap: "2.5rem",
          listStyle: "none", margin: 0, padding: 0,
        }} className="hide-mobile">
          {NAV_LINKS.map(function(link) {
            return (
              <li key={link.path}>
                <Link to={link.path} style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "11px", fontWeight: 400,
                  letterSpacing: "0.12em",
                  color: location.pathname === link.path ? "#c9a84c" : "#2a1f0f",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={function(e) { e.target.style.color = "#c9a84c"; }}
                  onMouseLeave={function(e) { e.target.style.color = location.pathname === link.path ? "#c9a84c" : "#2a1f0f"; }}
                >{link.label}</Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <button className="hide-mobile" style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "10px", fontWeight: 500,
          letterSpacing: "0.18em", color: "#8a6420",
          background: "transparent",
          border: "0.5px solid #c9a84c",
          padding: "9px 20px", cursor: "pointer",
          transition: "all 0.25s ease",
        }}
          onMouseEnter={function(e) { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#0f0e09"; }}
          onMouseLeave={function(e) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#8a6420"; }}
        >GET IN TOUCH</button>

        {/* Hamburger button — mobile only */}
        <button
          onClick={function() { setMenuOpen(!menuOpen); }}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          className="show-mobile"
        >
          <span style={{ width: "22px", height: "1px", background: "#b8933e", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none", display: "block" }} />
          <span style={{ width: "22px", height: "1px", background: "#b8933e", transition: "all 0.3s", opacity: menuOpen ? 0 : 1, display: "block" }} />
          <span style={{ width: "22px", height: "1px", background: "#b8933e", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none", display: "block" }} />
        </button>

      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: "fixed",
        top: "72px", left: 0, right: 0,
        zIndex: 99,
        background: "rgba(255,255,255,0.98)",
        borderBottom: "0.5px solid rgba(201,168,76,0.25)",
        padding: menuOpen ? "2rem" : "0 2rem",
        maxHeight: menuOpen ? "400px" : "0",
        overflow: "hidden",
        transition: "all 0.35s ease",
      }}>
        {NAV_LINKS.map(function(link) {
          return (
            <Link key={link.path} to={link.path} style={{
              display: "block",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "13px", fontWeight: 400,
              letterSpacing: "0.12em",
              color: location.pathname === link.path ? "#c9a84c" : "#2a1f0f",
              textDecoration: "none",
              padding: "12px 0",
              borderBottom: "0.5px solid rgba(201,168,76,0.1)",
            }}>{link.label}</Link>
          );
        })}
        <button style={{
          marginTop: "1.5rem",
          fontFamily: "'Raleway', sans-serif",
          fontSize: "10px", fontWeight: 500,
          letterSpacing: "0.18em", color: "#8a6420",
          background: "transparent",
          border: "0.5px solid #c9a84c",
          padding: "12px 24px", cursor: "pointer",
          width: "100%",
        }}>GET IN TOUCH</button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}