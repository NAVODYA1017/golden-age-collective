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
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: "72px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 3.5rem",
      background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.96)",
      borderBottom: "0.5px solid rgba(201,168,76,0.25)",
      backdropFilter: "blur(12px)",
      transition: "all 0.4s ease",
    }}>

      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
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
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.2em",
          color: "#b8933e",
        }}>GOLDEN AGE COLLECTIVE</span>
      </Link>

      <ul style={{ display: "flex", gap: "2.8rem", listStyle: "none", margin: 0, padding: 0 }}>
        {NAV_LINKS.map(function(link) {
          return (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "11.5px",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  color: location.pathname === link.path ? "#c9a84c" : "#2a1f0f",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#c9a84c"}
                onMouseLeave={e => e.target.style.color = location.pathname === link.path ? "#c9a84c" : "#2a1f0f"}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <button style={{
        fontFamily: "'Raleway', sans-serif",
        fontSize: "10.5px",
        fontWeight: 500,
        letterSpacing: "0.18em",
        color: "#8a6420",
        background: "transparent",
        border: "0.5px solid #c9a84c",
        padding: "9px 22px",
        cursor: "pointer",
      }}>
        GET IN TOUCH
      </button>

    </nav>
  );
}