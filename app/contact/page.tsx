import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — CréaQueen',
  description:
    'Une question avant de vous inscrire ? Écrivez-nous ou appelez du mardi au samedi, de 9h à 17h.',
};

const heading: React.CSSProperties = {
  fontFamily: 'var(--font-faustina), Georgia, serif',
};

export default function ContactPage() {
  return (
    <main>
      <section
        style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 40px 12px' }}
      >
        <p style={{ fontSize: 17, color: '#8A6068', margin: '0 0 16px' }}>
          <a href="/">Accueil</a> &nbsp;›&nbsp; Contact
        </p>
        <h1
          style={{
            ...heading,
            fontSize: 56,
            lineHeight: 1.12,
            fontWeight: 600,
            margin: '0 0 18px',
            color: '#3B2028',
            letterSpacing: '-0.02em',
          }}
        >
          Une question avant de vous inscrire ?
        </h1>
        <p
          style={{
            fontSize: 21,
            lineHeight: 1.65,
            color: '#5E434A',
            margin: 0,
            maxWidth: '40em',
          }}
        >
          Appelez-nous du lundi - mardi - jeudi - vendre, de 9h à 17h, ou
          laissez-nous un message : nous répondons toujours à quelqu&apos;un de
          vive voix, jamais par répondeur.
        </p>
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '34px 40px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 40,
          alignItems: 'start',
        }}
      >
        <div
          style={{
            background: '#FFEDE3',
            border: '1px solid #F5D9CB',
            borderRadius: 28,
            padding: '36px 34px',
            display: 'flex',
            flexDirection: 'column',
            gap: 26,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 16,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#B0653F',
                marginBottom: 10,
              }}
            >
              Téléphone
            </div>
            <a
              href="tel:0478256109"
              style={{ fontSize: 24, fontWeight: 600, color: '#D92B72' }}
            >
              04 78 25 61 09
            </a>
          </div>
          <div>
            <div
              style={{
                fontSize: 16,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#B0653F',
                marginBottom: 10,
              }}
            >
              E-mail
            </div>
            <a
              href="mailto:bonjour@creaqueen.fr"
              style={{ fontSize: 19, color: '#4A3138' }}
            >
              bonjour@creaqueen.fr
            </a>
          </div>
          <div>
            <div
              style={{
                fontSize: 16,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#B0653F',
                marginBottom: 10,
              }}
            >
              Horaires
            </div>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: '#4A3138',
                margin: 0,
              }}
            >
              Lundi - Mardi - Jeudi - Vendredi, 9h - 17h
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
