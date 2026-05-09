import type { Metadata } from "next";
import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import DataLayerRouteTracker from "@/components/DataLayerRouteTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ulpiano.es"),
  title: {
    default: "Ulpiano | Plataforma Integral de Gestión Sucesoria",
    template: "%s | Ulpiano",
  },
  description:
    "La plataforma que estructura, valida y documenta el proceso sucesorio completo. Para abogados, asesores y notarías que gestionan herencias.",
  keywords: [
    "gestión sucesoria",
    "herencias",
    "planificación patrimonial",
    "fiscalidad sucesoria",
    "despachos abogados",
  ],
  openGraph: {
    title: "Ulpiano | Plataforma Integral de Gestión Sucesoria",
    description: "El sistema operativo de las herencias.",
    url: "https://ulpiano.es",
    siteName: "Ulpiano",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulpiano | Plataforma Integral de Gestión Sucesoria",
    description: "El sistema operativo de las herencias.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Consent Mode v2 — MUST load before GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  analytics_storage:'denied',
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  functionality_storage:'granted',
  security_storage:'granted',
  wait_for_update:500
});
gtag('set','ads_data_redaction',true);
gtag('set','url_passthrough',true);
(function(){
  try{
    var c=document.cookie.split('; ').find(function(r){return r.startsWith('gt_consent=')});
    if(c){
      var s=JSON.parse(decodeURIComponent(c.split('=')[1]));
      var p={
        analytics_storage:s.analytics?'granted':'denied',
        ad_storage:s.marketing?'granted':'denied',
        ad_user_data:s.marketing?'granted':'denied',
        ad_personalization:s.marketing?'granted':'denied'
      };
      gtag('consent','update',p);
      dataLayer.push(['consent','update',p]);
    }
  }catch(e){}
})();`,
          }}
        />
      </head>
      <body className="bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ulpiano.es/#organization",
                  name: "Ulpiano",
                  url: "https://ulpiano.es",
                  description:
                    "Plataforma integral de gestión sucesoria para abogados, asesores y notarías.",
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "soporte@ulpiano.es",
                    contactType: "customer support",
                    availableLanguage: "Spanish",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ulpiano.es/#website",
                  url: "https://ulpiano.es",
                  name: "Ulpiano",
                  publisher: {
                    "@id": "https://ulpiano.es/#organization",
                  },
                  inLanguage: "es",
                },
              ],
            }),
          }}
        />
        <Header />
        <main className="flex flex-col min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <DataLayerRouteTracker />
        <GoogleTagManager gtmId="GTM-MBNWK2CW" />
      </body>
    </html>
  );
}
