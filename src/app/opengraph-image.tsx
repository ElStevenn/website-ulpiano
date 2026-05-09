import { ImageResponse } from "next/og";

export const alt = "Ulpiano — Plataforma Integral de Gestión Sucesoria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F1F3D 0%, #1E293B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#2D6A4F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            U
          </div>
          <span
            style={{
              color: "white",
              fontSize: "36px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            ULPIANO
          </span>
        </div>
        <div
          style={{
            color: "white",
            fontSize: "48px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          Plataforma Integral de Gestión Sucesoria
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "24px",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          De inventario a cuaderno particional. Para abogados, asesores y
          notarías.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#2D6A4F",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "18px",
            }}
          >
            ulpiano.es
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
