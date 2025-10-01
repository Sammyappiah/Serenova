import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serenova Hotel",
  description: "Experience comfort, elegance, and tranquility in Romania.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
