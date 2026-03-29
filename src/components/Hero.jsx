export default function Hero() {
  return (
    <section id="home" style={{
      position: "relative",
      height: "100vh",
      minHeight: "640px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: "#0a0905",
    }}>

      {/* Background layers */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, #0d1520 0%, #1b2535 18%, #2a3320 38%, #1e1c10 60%, #0a0905 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,168,76,0.18) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,4,2,0.65) 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        padding: "0 2rem",
        animation: "heroFadeUp 1.4s cubic-bezier(0.16,1,0.3,1) both",
      }}>

        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.45em",
          color: "rgba(201,168,76,0.8)",
          marginBottom: "1.4rem",
        }}>
          GOLDEN AGE COLLECTIVE
        </p>

        <div style={{
          color: "#c9a84c",
          fontSize: "14px",
          letterSpacing: "0.6em",
          opacity: 0.45,
          marginBottom: "1.4rem",
        }}>
          ✦ &nbsp; ✦ &nbsp; ✦
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(58px, 10vw, 118px)",
          fontWeight: 300,
          lineHeight: 1.02,
          color: "#f0ebe0",
          letterSpacing: "0.14em",
          margin: "0 0 2.4rem",
        }}>
          Enriching<br />
          <em style={{ fontStyle: "italic", color: "#dfc97a" }}>Every</em><br />
          Moment
        </h1>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(15px, 1.8vw, 19px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(240,235,224,0.6)",
          letterSpacing: "0.05em",
          maxWidth: "460px",
          margin: "0 auto 3rem",
          lineHeight: 1.8,
        }}>
          A vibrant community dedicated to the wellbeing, joy, and dignity of our seniors — celebrating life at every golden chapter.
        </p>

        <button
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "10.5px",
            fontWeight: 500,
            letterSpacing: "0.28em",
            color: "#0a0905",
            background: "#c9a84c",
            border: "none",
            padding: "17px 50px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#dfc97a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          DISCOVERY CALL
        </button>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}>
        <span style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "8.5px",
          letterSpacing: "0.35em",
          color: "rgba(201,168,76,0.5)",
        }}>SCROLL</span>
        <div style={{
          width: "0.5px",
          height: "44px",
          background: "linear-gradient(to bottom, rgba(201,168,76,0.55), transparent)",
        }} />
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}