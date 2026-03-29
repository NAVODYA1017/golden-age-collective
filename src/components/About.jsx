export default function About() {
  return (
    <section id="about" style={{
      background: "#0a0905",
      padding: "120px 0",
      position: "relative",
      overflow: "hidden",
    }}>

      <div style={{
        position: "absolute", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: "600px", height: "0.5px",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
      }} />

      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "100px",
          alignItems: "center",
        }}>

          {/* Left — Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%",
              aspectRatio: "4/5",
              background: "rgba(201,168,76,0.06)",
              border: "0.5px solid rgba(201,168,76,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "13px",
                fontStyle: "italic",
                color: "rgba(201,168,76,0.4)",
                letterSpacing: "0.1em",
                textAlign: "center",
                lineHeight: 2,
              }}>
                Your photo<br />goes here
              </p>
              {[
                { top: -1, left: -1, borderTop: "1px solid #c9a84c", borderLeft: "1px solid #c9a84c" },
                { top: -1, right: -1, borderTop: "1px solid #c9a84c", borderRight: "1px solid #c9a84c" },
                { bottom: -1, left: -1, borderBottom: "1px solid #c9a84c", borderLeft: "1px solid #c9a84c" },
                { bottom: -1, right: -1, borderBottom: "1px solid #c9a84c", borderRight: "1px solid #c9a84c" },
              ].map((s, i) => (
                <div key={i} style={{ position: "absolute", width: "24px", height: "24px", ...s }} />
              ))}
            </div>

            <div style={{
              position: "absolute",
              bottom: "-24px", right: "-24px",
              background: "#c9a84c",
              padding: "28px 32px",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "42px", fontWeight: 300,
                color: "#0a0905", lineHeight: 1, marginBottom: "6px",
              }}>10+</p>
              <p style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "9px", fontWeight: 500,
                letterSpacing: "0.2em", color: "#3a2a08",
              }}>YEARS OF SERVICE</p>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "9px", fontWeight: 500,
              letterSpacing: "0.45em",
              color: "rgba(201,168,76,0.7)",
              marginBottom: "1.2rem",
            }}>WHO WE ARE</p>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 300, color: "#f0ebe0",
              letterSpacing: "0.08em", lineHeight: 1.15,
              margin: "0 0 1.4rem",
            }}>
              A Community Built on<br />
              <em style={{ fontStyle: "italic", color: "#c9a84c" }}>Dignity & Joy</em>
            </h2>

            <div style={{
              width: "40px", height: "0.5px",
              background: "rgba(201,168,76,0.5)",
              marginBottom: "2rem",
            }} />

            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "14px", fontWeight: 300,
              color: "rgba(240,235,224,0.6)",
              lineHeight: 2, marginBottom: "1.5rem",
              letterSpacing: "0.02em",
            }}>
              Golden Age Collective was founded with a single, heartfelt mission — to enhance the wellbeing, active engagement, and quality of life of senior citizens by creating a warm, vibrant, and inclusive community.
            </p>

            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "14px", fontWeight: 300,
              color: "rgba(240,235,224,0.6)",
              lineHeight: 2, marginBottom: "2.5rem",
              letterSpacing: "0.02em",
            }}>
              We believe every senior deserves to live with dignity, purpose, and joy. From wellness programmes and cultural activities to caregiving support and eco-conscious initiatives, we are dedicated to nurturing every dimension of our members' lives.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px", marginBottom: "2.5rem",
            }}>
              {["Dignity & Respect", "Active Wellbeing", "Community Connection", "Sustainable Living"].map((value, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "4px", height: "4px",
                    background: "#c9a84c", borderRadius: "50%", flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "12px", fontWeight: 400,
                    letterSpacing: "0.06em",
                    color: "rgba(240,235,224,0.6)",
                  }}>{value}</span>
                </div>
              ))}
            </div>

            <button
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "10px", fontWeight: 500,
                letterSpacing: "0.28em", color: "#0a0905",
                background: "#c9a84c", border: "none",
                padding: "16px 44px", cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#dfc97a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              LEARN MORE
            </button>
          </div>

        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: "50%",
        transform: "translateX(-50%)",
        width: "600px", height: "0.5px",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
      }} />

    </section>
  );
}