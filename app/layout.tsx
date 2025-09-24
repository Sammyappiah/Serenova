import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serenova Eco Village – Modern Eco-Luxury Resort",
  description: "Serenova offers eco-friendly modular stays powered by solar energy.",
  metadataBase: new URL("https://serenova.ro"),
  openGraph: {
    title: "Serenova Eco Village",
    description: "Eco-friendly modular homes with modern comfort and natural serenity.",
    url: "https://serenova.ro",
    siteName: "Serenova",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Serenova Eco Village" }],
    locale: "en",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenova Eco Village",
    description: "Eco-friendly modular homes with modern comfort and natural serenity.",
    images: ["/images/og-image.jpg"]
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
