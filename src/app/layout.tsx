import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De Entre Casa Gourmet | Salón de Eventos cerca de Montevideo",
  description:
    "Salón de eventos gourmet a 52km de Montevideo. Bodas, cumpleaños y eventos empresariales con cocina artesanal propia.",
  keywords:
    "salón eventos Montevideo, bodas Uruguay, eventos campo Uruguay, catering artesanal, quinceañeros Uruguay",
  openGraph: {
    title: "De Entre Casa Gourmet | Salón de Eventos cerca de Montevideo",
    description:
      "Salón de eventos gourmet a 52km de Montevideo. Bodas, cumpleaños y eventos empresariales con cocina artesanal propia.",
    images: ["/images/og-image.jpg"],
    type: "website",
    locale: "es_UY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jost.variable}`}>
      <body className="bg-crema text-tierra font-jost antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
