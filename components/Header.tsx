"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(255,247,242,0.96)",
        borderBottom: "1px solid #F5D9CB",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "18px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <Link
          href="/"
          className="cq-logo-link"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            color: "inherit",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-faustina), Georgia, serif",
              fontSize: 30,
              fontWeight: 600,
              color: "#D92B72",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            CréaQueen
          </span>
          <span
            style={{
              fontSize: 13,
              color: "#8A6068",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Ateliers créatifs à domicile
          </span>
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link
            href="/"
            className={`cq-nav-link${pathname === "/" ? " active" : ""}`}
          >
            Accueil
          </Link>
          <Link
            href="/ateliers"
            className={`cq-nav-link${pathname === "/ateliers" ? " active" : ""}`}
          >
            Nos ateliers
          </Link>
          <Link
            href="/contact"
            className={`cq-nav-link${pathname === "/contact" ? " active" : ""}`}
          >
            Contact
          </Link>
          <Link
            href="/ateliers"
            className="cq-btn-primary"
            style={{ fontSize: 17, padding: "14px 26px", marginLeft: 12 }}
          >
            Réserver un atelier
          </Link>
        </nav>
      </div>
    </header>
  );
}
