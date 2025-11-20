import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sowepro.cz"),
  title: {
    default: "Sowepro",
    template: "%s | Sowepro",
  },
  description:
    "Tvoříme moderní webové stránky, video produkci a profesionální foto obsah. Pomáháme značkám růst pomocí kvalitního vizuálního storytellingu.",
  keywords: [
    "tvorba webu",
    "video produkce",
    "foto produkce",
    "webdesign",
    "tvorba loga",
    "branding",
    "digitální agentura",
    "Sowepro",
  ],
  authors: [{ name: "Sowepro", url: "https://www.sowepro.cz" }],
  creator: "Sowepro",
  publisher: "Sowepro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.sowepro.cz",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.sowepro.cz",
    title: "Sowepro — Moderní weby a videoprodukce",
    description:
      "Moderní weby, videa a fotoprodukce, které vašemu brandu pomohou růst.",
    siteName: "Sowepro",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sowepro — Weby, videa a foto produkce",
    description:
      "Pomáháme značkám růst moderním obsahem, profesionálními weby a videoprodukcí.",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="cs">
      <body className="bg-[#0f1a28] text-[#FFE8CC]">
          {children}
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}
