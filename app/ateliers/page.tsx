import type { Metadata } from "next";
import WorkshopFilters from "@/components/WorkshopFilters";

export const metadata: Metadata = {
  title: "Nos ateliers — CréaQueen",
  description:
    "Neuf ateliers, huit participantes maximum, matériel compris. Cuisine, art floral, poterie et peinture à Lyon et Villeurbanne.",
};

const heading: React.CSSProperties = {
  fontFamily: "var(--font-faustina), Georgia, serif",
};

export default function AteliersPage() {
  return (
    <main>
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 40px 12px" }}>
        <p style={{ fontSize: 17, color: "#8A6068", margin: "0 0 16px" }}>
          <a href="/">Accueil</a> &nbsp;›&nbsp; Nos ateliers
        </p>
        <h1
          style={{
            ...heading,
            fontSize: 56,
            lineHeight: 1.12,
            fontWeight: 600,
            margin: "0 0 18px",
            color: "#3B2028",
            letterSpacing: "-0.02em",
          }}
        >
          Tous nos ateliers
        </h1>
        <p style={{ fontSize: 21, lineHeight: 1.65, color: "#5E434A", margin: 0, maxWidth: "40em" }}>
          Neuf ateliers, huit participantes maximum, matériel compris.
          Choisissez celui qui vous fait envie : vous verrez les dates
          disponibles à l&apos;étape suivante.
        </p>
      </section>

      <WorkshopFilters />

      <section style={{ background: "#FFEDE3", borderTop: "1px solid #F5D9CB" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "56px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "34em" }}>
            <h2
              style={{
                ...heading,
                fontSize: 36,
                fontWeight: 600,
                margin: "0 0 12px",
                color: "#3B2028",
              }}
            >
              Vous hésitez entre deux ateliers ?
            </h2>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "#6A4A50", margin: 0 }}>
              Dites-nous ce qui vous attire, nous vous conseillons par
              téléphone en cinq minutes.
            </p>
          </div>
          <a
            href="tel:0478256109"
            className="cq-btn-primary"
            style={{ fontSize: 20, padding: "20px 34px", boxShadow: "0 3px 0 #A8154F" }}
          >
            04 78 25 61 09
          </a>
        </div>
      </section>
    </main>
  );
}
