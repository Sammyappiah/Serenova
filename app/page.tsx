import HomeClient from "./HomeClient";

export const metadata = {
  title: "Serenova — Quiet Luxury, Timeless Comfort",
  description: "Cinematic stays, crafted hospitality, and a sanctuary of calm.",
  openGraph: {
    title: "Serenova — Quiet Luxury, Timeless Comfort",
    description: "Cinematic stays, crafted hospitality, and a sanctuary of calm.",
    images: ["/images/og.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
