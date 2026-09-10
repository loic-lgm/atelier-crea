export default function Footer() {
  return (
    <footer style={{ background: '#3B2028', color: '#F2DDD6' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '56px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 48,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-faustina), Georgia, serif',
              fontSize: 28,
              fontWeight: 600,
              color: '#FFE4E9',
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
              color: '#D7BEC1',
              maxWidth: '26em',
            }}
          >
            Ateliers manuels et créatifs à domicile, individuels ou en petits
            groupes en île de France
          </p>
        </div>
        <div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#B79AA0',
              marginBottom: 14,
            }}
          >
            Horaires
          </div>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              margin: 0,
              color: '#F2DDD6',
            }}
          >
            Lundi - Mardi - Jeudi - Vendredi
            <br />
            9h - 17h
            <br />
            bonjour@creaqueen.fr
          </p>
        </div>
      </div>
    </footer>
  );
}
