import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serenova Hotel",
  description: "Experience comfort, elegance, and tranquility in the heart of Romania.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fdfcf7] text-gray-900">{children}</body>
    </html>
  );
}
