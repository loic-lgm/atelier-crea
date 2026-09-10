import Link from 'next/link';
import PhotoPlaceholder from '@/components/PhotoPlaceholder';
import WorkshopCard from '@/components/WorkshopCard';
import {
  WORKSHOPS,
  REASSURANCE,
  CREATIONS,
  REVIEWS,
  tagStyle,
} from '@/lib/data';

const heading: React.CSSProperties = {
  fontFamily: 'var(--font-faustina), Georgia, serif',
};

export default function HomePage() {
  const featured = WORKSHOPS.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '64px 40px 40px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              display: 'inline-block',
              margin: '0 0 22px',
              padding: '8px 16px',
              borderRadius: 999,
              background: '#FFE3D3',
              color: '#C24F17',
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Pensé pour vivre des moments de partage créatifs
          </p>
          <h1
            style={{
              ...heading,
              fontSize: 66,
              lineHeight: 1.1,
              fontWeight: 600,
              margin: '0 0 24px',
              color: '#3B2028',
              letterSpacing: '-0.02em',
              textWrap: 'pretty' as React.CSSProperties['textWrap'],
            }}
          >
            Des ateliers créatifs chez vous, pour le plaisir de créer et de
            partager.
            <br />
            avec vos mains.
          </h1>
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.65,
              margin: '0 0 36px',
              color: '#5E434A',
              maxWidth: '32em',
            }}
          >
            Des ateliers d’art floral, de mosaïque, de pâte fimo, de cuisine et
            de peinture, individuels ou en petits groupes de 5 personnes
            maximum. Tout le matériel est fourni, aucune expérience n’est
            nécessaire, et on prend le temps de faire connaissance.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Link
              href="/ateliers"
              className="cq-btn-primary"
              style={{
                fontSize: 20,
                padding: '20px 34px',
                boxShadow: '0 3px 0 #A8154F',
              }}
            >
              Découvrir les ateliers
            </Link>
            <a
              href="tel:0478256109"
              className="cq-btn-secondary"
              style={{ fontSize: 20, padding: '20px 34px' }}
            >
              Nous appeler : 04 78 25 61 09
            </a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              borderRadius: '220px 220px 24px 220px',
              overflow: 'hidden',
              border: '1px solid #F0C7B2',
              background:
                'repeating-linear-gradient(135deg, #FFE0CE 0 12px, #FDCFB9 12px 24px)',
              height: 520,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 28,
            }}
          >
            <span
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: 13,
                color: '#B0653F',
                background: '#FFFCFA',
                border: '1px solid #F0C7B2',
                borderRadius: 8,
                padding: '8px 12px',
                textAlign: 'center',
              }}
            >
              photo : mains qui pétrissent la pâte, lumière chaude
              d&apos;atelier
            </span>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: -26,
              left: -26,
              background: '#FFFCFA',
              border: '1px solid #F5D9CB',
              borderRadius: 20,
              padding: '20px 26px',
              boxShadow: '0 14px 30px rgba(150,50,80,0.16)',
              animation: 'cq-float 6s ease-in-out infinite',
              willChange: 'transform',
            }}
          >
            <div
              style={{
                ...heading,
                fontSize: 36,
                fontWeight: 600,
                color: '#D92B72',
                lineHeight: 1,
              }}
            >
              35
            </div>
            <div style={{ fontSize: 16, color: '#7A575C', marginTop: 4 }}>
              ateliers organisés
              <br />
              depuis 2026
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section
        style={{
          background: '#FFEDE3',
          borderTop: '1px solid #F5D9CB',
          borderBottom: '1px solid #F5D9CB',
          marginTop: 56,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '32px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40,
          }}
        >
          {REASSURANCE.map((r) => (
            <div
              key={r.title}
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
            >
              <div
                style={{
                  flex: 'none',
                  width: 14,
                  height: 14,
                  marginTop: 8,
                  borderRadius: '50%',
                  background: '#F2703A',
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: 19,
                    fontWeight: 600,
                    color: '#4A3138',
                    marginBottom: 4,
                  }}
                >
                  {r.title}
                </div>
                <div
                  style={{ fontSize: 17, lineHeight: 1.55, color: '#6A4A50' }}
                >
                  {r.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured workshops */}
      <section
        style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 40px 0' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
            marginBottom: 36,
          }}
        >
          <div>
            <h2
              style={{
                ...heading,
                fontSize: 44,
                fontWeight: 600,
                margin: '0 0 10px',
                color: '#3B2028',
              }}
            >
              Nos ateliers du moment
            </h2>
            <p style={{ fontSize: 20, color: '#6A4A50', margin: 0 }}>
              Les rendez-vous créatifs de la saison
            </p>
          </div>
          <Link
            href="/ateliers"
            className="cq-btn-secondary"
            style={{ fontSize: 19, padding: '16px 26px' }}
          >
            Voir les 11 ateliers
          </Link>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }}
        >
          {featured.map((w) => (
            <WorkshopCard key={w.id} workshop={w} photoHeight={230} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section
        style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 40px 0' }}
      >
        <div
          style={{
            background: '#FFFCFA',
            border: '1px solid #F5D9CB',
            borderRadius: 36,
            padding: '52px 56px',
          }}
        >
          <h2
            style={{
              ...heading,
              fontSize: 40,
              fontWeight: 600,
              margin: '0 0 34px',
              color: '#3B2028',
            }}
          >
            Ce qu&apos;en disent nos participants
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 40,
            }}
          >
            {REVIEWS.map((t) => (
              <figure
                key={t.name}
                style={{
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                }}
              >
                <div
                  style={{ color: '#F5A623', fontSize: 20, letterSpacing: 3 }}
                >
                  ★★★★★
                </div>
                <blockquote
                  style={{
                    ...heading,
                    margin: 0,
                    fontSize: 21,
                    lineHeight: 1.6,
                    color: '#54393F',
                    fontWeight: 400,
                  }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontSize: 17,
                    color: '#7A575C',
                  }}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#FFE0CE',
                      border: '1px solid #F0C7B2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-faustina), Georgia, serif',
                      fontSize: 19,
                      color: '#C24F17',
                    }}
                  >
                    {t.initials}
                  </span>
                  <span>{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Creations */}
      <section
        style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 40px' }}
      >
        <div style={{ marginBottom: 36 }}>
          <h2
            style={{
              ...heading,
              fontSize: 44,
              fontWeight: 600,
              margin: 0,
              color: '#3B2028',
            }}
          >
            Les créations du moment
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
          }}
        >
          {CREATIONS.map((c) => (
            <figure key={c.title} className="cq-figure">
              <PhotoPlaceholder caption={c.photo} height={200} />
              <figcaption
                style={{
                  padding: '18px 20px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <span style={tagStyle(c.cat)}>{c.cat}</span>
                <div
                  style={{
                    ...heading,
                    fontSize: 21,
                    fontWeight: 600,
                    color: '#3B2028',
                    marginBottom: 4,
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{ fontSize: 17, color: '#7A575C', lineHeight: 1.5 }}
                >
                  {c.author}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F2703A', color: '#FFF7F2' }}>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '64px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 48,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '36em' }}>
            <h2
              style={{
                ...heading,
                fontSize: 42,
                fontWeight: 600,
                margin: '0 0 14px',
                color: '#FFFCFA',
              }}
            >
              Une question avant de vous inscrire ?
            </h2>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.6,
                margin: 0,
                color: '#FFEDE1',
              }}
            >
              Appelez-nous le lundi - mardi - jeudi - vendre, de 9h à 17h. Nous répondons
              toujours à quelqu&apos;un de vive voix.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a
              href="tel:0478256109"
              style={{
                font: 'inherit',
                fontSize: 20,
                fontWeight: 600,
                padding: '20px 34px',
                border: 'none',
                borderRadius: 999,
                background: '#FFFCFA',
                color: '#C24F17',
                cursor: 'pointer',
                boxShadow: '0 3px 0 #C24F17',
                textAlign: 'center',
              }}
            >
              04 78 25 61 09
            </a>
            <Link
              href="/contact"
              style={{
                font: 'inherit',
                fontSize: 19,
                fontWeight: 600,
                padding: '18px 34px',
                border: '2px solid #FBD3B8',
                borderRadius: 999,
                background: 'transparent',
                color: '#FFFCFA',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              Écrire un message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
