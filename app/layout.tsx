import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://serenova.ro"),
  title: "Serenova Eco Village – Modern Eco-Luxury Resort",
  description: "Eco-friendly modular homes with modern comfort and natural serenity.",
  openGraph: {
    title: "Serenova Eco Village",
    description: "Eco-friendly modular homes with modern comfort and natural serenity.",
    url: "https://serenova.ro",
    siteName: "Serenova",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Serenova Eco Village" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenova Eco Village",
    description: "Eco-friendly modular homes with modern comfort and natural serenity.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF8F5] text-[#0F1915] antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
