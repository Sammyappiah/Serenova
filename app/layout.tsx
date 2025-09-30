import "./globals.css";

export const metadata = {
  title: "Serenova Hotel",
  description: "Comfort, elegance, and tranquility in Romania.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
