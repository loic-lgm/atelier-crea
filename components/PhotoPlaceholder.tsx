import type { CSSProperties } from "react";

export default function PhotoPlaceholder({
  caption,
  height,
  radius,
}: {
  caption: string;
  height: number;
  radius?: string;
}) {
  const style: CSSProperties = {
    height,
    background:
      "repeating-linear-gradient(135deg, #FFE0CE 0 12px, #FDCFB9 12px 24px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottom: "1px solid #F5D9CB",
  };
  if (radius) style.borderRadius = radius;

  return (
    <div style={style}>
      <span
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 12,
          color: "#B0653F",
          background: "#FFFCFA",
          border: "1px solid #F0C7B2",
          borderRadius: 8,
          padding: "7px 10px",
          textAlign: "center",
        }}
      >
        {caption}
      </span>
    </div>
  );
}
