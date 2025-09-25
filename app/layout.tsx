// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Serenova Eco Village – Modern Eco-Luxury Resort",
  description: "Eco-friendly modular homes with modern comfort and natural serenity.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Serenova Eco Village",
    description: "Eco-friendly modular homes with modern comfort and natural serenity.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
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
