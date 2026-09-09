export default function Footer() {
  return (
    <footer style={{ background: "#3B2028", color: "#F2DDD6" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "56px 40px",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr",
          gap: 48,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-faustina), Georgia, serif",
              fontSize: 28,
              fontWeight: 600,
              color: "#FFE4E9",
              marginBottom: 12,
            }}
          >
            CréaQueen
          </div>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              margin: 0,
              color: "#D7BEC1",
              maxWidth: "26em",
            }}
          >
            Ateliers manuels et créatifs en petits groupes, à Lyon et
            Villeurbanne, depuis 2016.
          </p>
        </div>
        <div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#B79AA0",
              marginBottom: 14,
            }}
          >
            Nous trouver
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.7, margin: 0, color: "#F2DDD6" }}>
            14 rue des Capucins
            <br />
            69001 Lyon
            <br />
            04 78 25 61 09
          </p>
        </div>
        <div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#B79AA0",
              marginBottom: 14,
            }}
          >
            Horaires
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.7, margin: 0, color: "#F2DDD6" }}>
            Mardi au samedi
            <br />
            9h – 18h
            <br />
            bonjour@creaqueen.fr
          </p>
        </div>
      </div>
    </footer>
  );
}
