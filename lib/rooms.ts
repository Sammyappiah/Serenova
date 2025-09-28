export type Room = {
  id: string;
  name: string;
  price: number;
  maxGuests: number;
  image: string;
  short: string;
  description: string;
};

export const rooms: Room[] = [
  {
    id: "accessible",
    name: "Accessible Suite",
    price: 70,
    maxGuests: 2,
    image: "/images/rooms/accessible.jpg",
    short: "Step-free luxury with thoughtful accessibility.",
    description:
      "Our Accessible Suite offers generous, barrier-free design with roll-in shower, wider clearances, and calming natural finishes. An effortless, restorative stay.",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 70,
    maxGuests: 2,
    image: "/images/rooms/deluxe.jpg",
    short: "Minimal, elegant comfort with garden views.",
    description:
      "A refined, light-filled space furnished with natural woods and organic textiles. Wake to birdsong and the soft glow of the gardens.",
  },
  {
    id: "family",
    name: "Family Room",
    price: 85,
    maxGuests: 4,
    image: "/images/rooms/family.jpg",
    short: "Spacious layout ideal for families.",
    description:
      "Room to unwind together. Separate sleeping zones, generous storage, and cozy lounge area—perfect after a day wandering the village.",
  },
];
