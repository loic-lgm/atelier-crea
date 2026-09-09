"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        style={{
          background: "#FFFCFA",
          border: "1px solid #F5D9CB",
          borderRadius: 28,
          padding: "48px 44px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-faustina), Georgia, serif",
            fontSize: 30,
            fontWeight: 600,
            color: "#3B2028",
            marginBottom: 12,
          }}
        >
          Merci, votre message est bien parti !
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#6A4A50", margin: 0 }}>
          Nous vous répondons sous 24 h ouvrées, du mardi au samedi. Vous
          pouvez aussi nous appeler directement au{" "}
          <a href="tel:0478256109">04 78 25 61 09</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#FFFCFA",
        border: "1px solid #F5D9CB",
        borderRadius: 28,
        padding: "44px",
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        <div>
          <label className="cq-label" htmlFor="name">
            Nom et prénom
          </label>
          <input className="cq-input" id="name" name="name" type="text" required />
        </div>
        <div>
          <label className="cq-label" htmlFor="phone">
            Téléphone (optionnel)
          </label>
          <input className="cq-input" id="phone" name="phone" type="tel" />
        </div>
      </div>
      <div>
        <label className="cq-label" htmlFor="email">
          E-mail
        </label>
        <input className="cq-input" id="email" name="email" type="email" required />
      </div>
      <div>
        <label className="cq-label" htmlFor="message">
          Votre message
        </label>
        <textarea
          className="cq-input"
          id="message"
          name="message"
          rows={6}
          required
          style={{ resize: "vertical", fontFamily: "inherit" }}
        />
      </div>
      <button
        type="submit"
        className="cq-btn-primary"
        style={{
          fontSize: 19,
          padding: "18px 34px",
          alignSelf: "flex-start",
          boxShadow: "0 3px 0 #A8154F",
          border: "none",
        }}
      >
        Envoyer le message
      </button>
    </form>
  );
}
