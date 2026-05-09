import type { Metadata } from "next";
import LoginSelector from "./LoginSelector";

export const metadata: Metadata = {
  title: "Iniciar Sesión — Ulpiano",
  description:
    "Accede a tu cuenta de Ulpiano. Portal profesional para abogados, asesores y notarías, o portal de cliente para consultar tu expediente.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginSelector />;
}
