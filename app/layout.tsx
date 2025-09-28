import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Serenova Eco Village – Modern Eco-Luxury Resort",
  description: "Eco-friendly modular homes with modern comfort and natural serenity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-deep-forest antialiased">
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Push content below fixed Navbar */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
