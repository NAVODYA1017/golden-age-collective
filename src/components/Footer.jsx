export default function Footer() {
  return (
    <footer style={{
      background: "#050402",
      padding: "80px 0 0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Top gold line */}
      <div style={{
        position: "absolute", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: "600px", height: "0.5px",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
      }} />

      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>

        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          gap: "60px",
          marginBottom: "64px",
        }}>

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
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
                letterSpacing: "0.2em", color: "#b8933e",
              }}>GOLDEN AGE COLLECTIVE</span>
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px", fontStyle: "italic",
              color: "rgba(240,235,224,0.45)",
              lineHeight: 1.9, marginBottom: "2rem",
              maxWidth: "280px",
            }}>
              Enriching lives, fostering community, and celebrating the golden years with dignity and joy.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "16px" }}>
              {["FB", "IG", "TW", "LI"].map(function(social) {
                return (
                  <a key={social} href="#" style={{
                    width: "36px", height: "36px",
                    border: "0.5px solid rgba(201,168,76,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "9px", fontWeight: 500,
                    letterSpacing: "0.05em",
                    color: "rgba(201,168,76,0.5)",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                    onMouseEnter={function(e) {
                      e.currentTarget.style.borderColor = "#c9a84c";
                      e.currentTarget.style.color = "#c9a84c";
                    }}
                    onMouseLeave={function(e) {
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
                      e.currentTarget.style.color = "rgba(201,168,76,0.5)";
                    }}
                  >{social}</a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "9px", fontWeight: 500,
              letterSpacing: "0.35em", color: "rgba(201,168,76,0.6)",
              marginBottom: "1.5rem",
            }}>NAVIGATION</p>
            {["Home", "Services", "About", "Gallery", "Contact"].map(function(link) {
              return (
                <a key={link} href={"#" + link.toLowerCase()} style={{
                  display: "block",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "13px", fontWeight: 300,
                  letterSpacing: "0.05em",
                  color: "rgba(240,235,224,0.4)",
                  textDecoration: "none",
                  marginBottom: "0.9rem",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={function(e) { e.target.style.color = "#c9a84c"; }}
                  onMouseLeave={function(e) { e.target.style.color = "rgba(240,235,224,0.4)"; }}
                >{link}</a>
              );
            })}
          </div>

          {/* Services */}
          <div>
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "9px", fontWeight: 500,
              letterSpacing: "0.35em", color: "rgba(201,168,76,0.6)",
              marginBottom: "1.5rem",
            }}>PROGRAMMES</p>
            {["Wellness & Mind-Body", "Travel & Leisure", "Social & Cultural", "Mentorship", "Caregiving Support", "Eco Marketplace"].map(function(item) {
              return (
                <a key={item} href="#services" style={{
                  display: "block",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "13px", fontWeight: 300,
                  letterSpacing: "0.05em",
                  color: "rgba(240,235,224,0.4)",
                  textDecoration: "none",
                  marginBottom: "0.9rem",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={function(e) { e.target.style.color = "#c9a84c"; }}
                  onMouseLeave={function(e) { e.target.style.color = "rgba(240,235,224,0.4)"; }}
                >{item}</a>
              );
            })}
          </div>

          {/* Contact Info */}
          <div>
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "9px", fontWeight: 500,
              letterSpacing: "0.35em", color: "rgba(201,168,76,0.6)",
              marginBottom: "1.5rem",
            }}>CONTACT</p>

            {[
              { label: "Email", value: "hello@goldenagecollective.com" },
              { label: "Phone", value: "+1 (555) 000-0000" },
              { label: "Address", value: "123 Golden Street, City, Country" },
            ].map(function(item) {
              return (
                <div key={item.label} style={{ marginBottom: "1.2rem" }}>
                  <p style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "9px", fontWeight: 500,
                    letterSpacing: "0.2em",
                    color: "rgba(201,168,76,0.4)",
                    marginBottom: "4px",
                  }}>{item.label}</p>
                  <p style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "13px", fontWeight: 300,
                    color: "rgba(240,235,224,0.4)",
                    lineHeight: 1.6,
                  }}>{item.value}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Divider */}
        <div style={{
          width: "100%", height: "0.5px",
          background: "rgba(201,168,76,0.1)",
          marginBottom: "32px",
        }} />

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "32px",
        }}>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "11px", fontWeight: 300,
            letterSpacing: "0.05em",
            color: "rgba(240,235,224,0.25)",
          }}>
            © 2025 Golden Age Collective. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "12px", fontStyle: "italic",
            color: "rgba(201,168,76,0.3)",
            letterSpacing: "0.05em",
          }}>
            Enriching Every Moment
          </p>
        </div>

      </div>
    </footer>
  );
}