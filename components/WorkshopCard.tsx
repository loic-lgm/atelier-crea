import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { Workshop, tagStyle, barStyle } from "@/lib/data";

const heading: React.CSSProperties = {
  fontFamily: "var(--font-faustina), Georgia, serif",
};

export default function WorkshopCard({
  workshop: w,
  photoHeight = 210,
}: {
  workshop: Workshop;
  photoHeight?: number;
}) {
  return (
    <article className="cq-card">
      <PhotoPlaceholder caption={w.photo} height={photoHeight} />
      <div style={barStyle(w.cat)} />
      <div
        style={{
          padding: "24px 26px 26px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <span style={tagStyle(w.cat)}>{w.tag}</span>
        <h3
          style={{
            ...heading,
            fontSize: 26,
            fontWeight: 600,
            margin: "0 0 10px",
            color: "#3B2028",
          }}
        >
          {w.title}
        </h3>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#6A4A50", margin: "0 0 18px" }}>
          {w.desc}
        </p>
        <dl
          style={{
            margin: "0 0 20px",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "8px 14px",
            fontSize: 17,
          }}
        >
          <dt style={{ color: "#9A727A" }}>Durée</dt>
          <dd style={{ margin: 0, color: "#54393F" }}>{w.duration}</dd>
          <dt style={{ color: "#9A727A" }}>Tarif</dt>
          <dd style={{ margin: 0, color: "#54393F" }}>{w.price} par personne</dd>
          <dt style={{ color: "#9A727A" }}>Lieu</dt>
          <dd style={{ margin: 0, color: "#54393F" }}>{w.place}</dd>
        </dl>
        <div
          style={{
            marginTop: "auto",
            borderTop: "1px dashed #F5CDB9",
            paddingTop: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Link
            href="/contact"
            className="cq-btn-primary"
            style={{ fontSize: 17, padding: "12px 22px" }}
          >
            Choisir une date
          </Link>
        </div>
      </div>
    </article>
  );
}
