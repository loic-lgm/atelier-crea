"use client";

import { useState } from "react";
import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { WORKSHOPS, CATS, CAT_COLORS, tagStyle, barStyle, Category } from "@/lib/data";

const heading: React.CSSProperties = {
  fontFamily: "var(--font-faustina), Georgia, serif",
};

type CatFilter = Category | "Tous les ateliers";

function filterStyle(c: CatFilter, active: boolean): React.CSSProperties {
  if (c === "Tous les ateliers") {
    return active
      ? {
          font: "inherit",
          fontSize: 18,
          fontWeight: 600,
          padding: "12px 22px",
          border: "2px solid #3B2028",
          borderRadius: 999,
          background: "#3B2028",
          color: "#FFF7F2",
          cursor: "pointer",
        }
      : {
          font: "inherit",
          fontSize: 18,
          fontWeight: 500,
          padding: "12px 22px",
          border: "2px solid #F0C7B2",
          borderRadius: 999,
          background: "#FFFCFA",
          color: "#54393F",
          cursor: "pointer",
        };
  }
  const col = CAT_COLORS[c];
  return active
    ? {
        font: "inherit",
        fontSize: 18,
        fontWeight: 600,
        padding: "12px 22px",
        border: `2px solid ${col.ink}`,
        borderRadius: 999,
        background: col.ink,
        color: "#FFFCFA",
        cursor: "pointer",
      }
    : {
        font: "inherit",
        fontSize: 18,
        fontWeight: 500,
        padding: "12px 22px",
        border: `2px solid ${col.line}`,
        borderRadius: 999,
        background: col.bg,
        color: col.ink,
        cursor: "pointer",
      };
}

export default function WorkshopFilters() {
  const [cat, setCat] = useState<CatFilter>("Tous les ateliers");

  const visible =
    cat === "Tous les ateliers" ? WORKSHOPS : WORKSHOPS.filter((w) => w.cat === cat);
  const countLabel =
    visible.length + (visible.length > 1 ? " ateliers disponibles" : " atelier disponible");

  return (
    <>
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 40px 8px" }}>
        <div
          style={{
            background: "#FFFCFA",
            border: "1px solid #F5D9CB",
            borderRadius: 24,
            padding: "22px 26px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 600, color: "#6A4A50", marginRight: 6 }}>
            Filtrer :
          </span>
          {CATS.map((c) => (
            <button
              key={c}
              className="cq-filter-btn"
              style={filterStyle(c, c === cat)}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 40px 80px" }}>
        <p style={{ fontSize: 18, color: "#7A575C", margin: "0 0 24px" }}>{countLabel}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 34 }}>
          {visible.map((w) => (
            <article key={w.id} className="cq-card">
              <PhotoPlaceholder caption={w.photo} height={210} />
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
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 16, color: "#7A575C" }}>{w.next}</span>
                  <Link
                    href="/contact"
                    className="cq-btn-primary"
                    style={{ fontSize: 17, padding: "12px 22px" }}
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
