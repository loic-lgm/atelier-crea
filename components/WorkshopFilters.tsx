"use client";

import { useState } from "react";
import WorkshopCard from "@/components/WorkshopCard";
import { WORKSHOPS, CATS, CAT_COLORS, Category } from "@/lib/data";

type CatFilter = Category | "Tous les ateliers";

function filterStyle(c: CatFilter, active: boolean): React.CSSProperties {
  if (c === "Tous les ateliers") {
    return active
      ? {
          font: "inherit",
          fontSize: 15,
          fontWeight: 600,
          padding: "9px 16px",
          border: "2px solid #3B2028",
          borderRadius: 999,
          background: "#3B2028",
          color: "#FFF7F2",
          cursor: "pointer",
        }
      : {
          font: "inherit",
          fontSize: 15,
          fontWeight: 500,
          padding: "9px 16px",
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
        fontSize: 15,
        fontWeight: 600,
        padding: "9px 16px",
        border: `2px solid ${col.ink}`,
        borderRadius: 999,
        background: col.ink,
        color: "#FFFCFA",
        cursor: "pointer",
      }
    : {
        font: "inherit",
        fontSize: 15,
        fontWeight: 500,
        padding: "9px 16px",
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
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 600, color: "#6A4A50", marginRight: 4 }}>
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
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      </section>
    </>
  );
}
