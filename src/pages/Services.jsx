export default function Services() {
  const services = [
    {
      title: "Wellness Programs",
      description: "Holistic health initiatives designed for vitality and longevity"
    },
    {
      title: "Social Events",
      description: "Curated gatherings that foster community and connection"
    },
    {
      title: "Cultural Activities",
      description: "Enriching experiences celebrating art, music, and heritage"
    },
    {
      title: "Support Network",
      description: "Compassionate assistance and resources for daily living"
    }
  ];

  return (
    <section id="services" style={{
      padding: "6rem 3.5rem",
      background: "#0a0905",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        maxWidth: "1200px",
        width: "100%",
      }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.45em",
            color: "rgba(201,168,76,0.8)",
            marginBottom: "1rem",
          }}>OUR OFFERINGS</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 300,
            color: "#f0ebe0",
            letterSpacing: "0.08em",
            margin: 0,
          }}>Services</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2.5rem",
        }}>
          {services.map((service, i) => (
            <div key={i} style={{
              padding: "2.5rem",
              border: "0.5px solid rgba(201,168,76,0.3)",
              background: "rgba(201,168,76,0.03)",
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(201,168,76,0.08)";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(201,168,76,0.03)";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
            }}>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 400,
                color: "#c9a84c",
                marginBottom: "1rem",
                margin: 0,
              }}>{service.title}</h3>
              <p style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "14px",
                color: "rgba(240,235,224,0.7)",
                lineHeight: 1.6,
                margin: 0,
              }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
