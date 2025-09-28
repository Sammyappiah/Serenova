import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Serenova Eco Village",
  description:
    "A modern eco-friendly village with luxury rooms, sustainable design, and serene nature experiences.",
  metadataBase: new URL("https://serenova.ro"),
  openGraph: {
    title: "Serenova Eco Village",
    description:
      "Luxury eco-living in harmony with nature. Book your stay at Serenova.",
    url: "https://serenova.ro",
    siteName: "Serenova",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Serenova Eco Village",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@serenova",
    title: "Serenova Eco Village",
    description: "Luxury eco-living in harmony with nature.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-cream text-deep-forest">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
