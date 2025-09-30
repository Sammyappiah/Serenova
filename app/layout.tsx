import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Serenova — A Sanctuary of Calm",
    template: "%s | Serenova",
  },
  description:
    "Serenova blends timeless design with thoughtful hospitality. Discover elevated stays in a tranquil setting.",
  metadataBase: new URL("https://serenova.example"), // update to your real domain when deployed
  openGraph: {
    title: "Serenova — A Sanctuary of Calm",
    description:
      "Elevated stays, refined comfort, and effortless elegance.",
    url: "https://serenova.example",
    siteName: "Serenova",
    images: [
      { url: "/images/reception.jpg", width: 1200, height: 630, alt: "Serenova Lobby" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenova — A Sanctuary of Calm",
    description: "Elevated stays, refined comfort, and effortless elegance.",
    images: ["/images/reception.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-gradient-to-b from-[#f6f4ef] to-[#efece6] text-gray-800 antialiased">
        <div className="relative">
          {/* subtle luxury background grain */}
          <div className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-multiply" style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }} />
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
