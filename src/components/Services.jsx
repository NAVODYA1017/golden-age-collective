const SERVICES = [
  {
    title: "Wellness & Mind-Body",
    description:
      "Yoga, meditation, fitness classes, and holistic health programmes designed specifically for seniors to nurture body, mind, and spirit.",
  },
  {
    title: "Travel & Leisure",
    description:
      "Curated travel experiences, day trips, cultural excursions, and leisure activities that bring joy and adventure to every golden chapter.",
  },
  {
    title: "Social & Cultural",
    description:
      "Vibrant community gatherings, arts, music, theatre, and lifelong learning programmes that keep our members engaged and inspired.",
  },
  {
    title: "Mentorship & Volunteering",
    description:
      "Meaningful opportunities to share wisdom, give back to the community, and build lasting connections through mentorship and volunteer work.",
  },
  {
    title: "Caregiving & Medical Support",
    description:
      "Compassionate assistance with caregiving needs, medical consultations, appointment facilitation, and supportive services for health and dignity.",
  },
  {
    title: "Eco & Women's Marketplace",
    description:
      "A curated platform promoting eco-friendly, organic products from women-led SMEs — supporting sustainable livelihoods and responsible living.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      background: "#0c0b07",
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
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>

        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "9px", fontWeight: 500,
            letterSpacing: "0.45em",
            color: "rgba(201,168,76,0.7)",
            marginBottom: "1.2rem",
          }}>WHAT WE OFFER</p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(38px, 5vw, 62px)",
            fontWeight: 300,
            color: "#f0ebe0",
            letterSpacing: "0.1em",
            lineHeight: 1.1,
            margin: "0 0 1.4rem",
          }}>
            Our <em style={{ fontStyle: "italic", color: "#c9a84c" }}>Services</em>
          </h2>

          <div style={{
            width: "40px", height: "0.5px",
            background: "rgba(201,168,76,0.5)",
            margin: "0 auto 1.4rem",
          }} />

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "18px",
            fontStyle: "italic",
            color: "rgba(240,235,224,0.5)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}>
            A comprehensive range of programmes crafted to enrich, empower, and celebrate the lives of our members.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
        }}>
          {SERVICES.map((service, i) => (
            <div
              key={i}
              style={{
                padding: "48px 36px",
                border: "0.5px solid rgba(201,168,76,0.12)",
                background: "rgba(255,255,255,0.015)",
                cursor: "default",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.015)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)";
              }}
            >
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "11px", fontWeight: 300,
                letterSpacing: "0.3em",
                color: "rgba(201,168,76,0.35)",
                marginBottom: "1.5rem",
              }}>0{i + 1}</p>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px", fontWeight: 400,
                color: "#f0ebe0",
                letterSpacing: "0.06em",
                marginBottom: "1.2rem",
                lineHeight: 1.25,
              }}>{service.title}</h3>

              <div style={{
                width: "28px", height: "0.5px",
                background: "rgba(201,168,76,0.4)",
                marginBottom: "1.2rem",
              }} />

              <p style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "13px", fontWeight: 300,
                color: "rgba(240,235,224,0.5)",
                lineHeight: 1.9,
                letterSpacing: "0.02em",
              }}>{service.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "72px" }}>
          <button
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "10px", fontWeight: 500,
              letterSpacing: "0.28em",
              color: "#c9a84c",
              background: "transparent",
              border: "0.5px solid rgba(201,168,76,0.5)",
              padding: "16px 48px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#c9a84c";
              e.currentTarget.style.color = "#0a0905";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#c9a84c";
            }}
          >
            BOOK A DISCOVERY CALL
          </button>
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