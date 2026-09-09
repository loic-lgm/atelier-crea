import type { Metadata } from "next";
import { Faustina, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const faustina = Faustina({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-faustina",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CréaQueen — Ateliers créatifs à Lyon et Villeurbanne",
  description:
    "Ateliers de cuisine, art floral, poterie et peinture en petits groupes de huit personnes maximum. Pensé pour les femmes de 50 ans et plus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${faustina.variable} ${sourceSans.variable}`}>
      <body className={sourceSans.className}>
        <div
          style={{
            minHeight: "100vh",
            background: "#FFF7F2",
            backgroundImage: "radial-gradient(#F8DCD0 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
