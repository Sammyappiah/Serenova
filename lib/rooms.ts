export type Room = {
  id: string;
  title: string;
  price: number;
  maxGuests: number;
  image: string;
  description: string;
  features: string[];
};

export const rooms: Room[] = [
  {
    id: "deluxe",
    title: "DELUXE ROOM",
    price: 70,
    maxGuests: 2,
    image: "/images/deluxe.jpg",
    description: "A cozy and stylish room perfect for couples.",
    features: ["Queen bed", "Ensuite bathroom", "Wi-Fi", "Garden view"],
  },
  {
    id: "accessible",
    title: "ACCESSIBLE SUITE",
    price: 70,
    maxGuests: 2,
    image: "/images/accessible.jpg",
    description: "Designed with accessibility in mind for comfort and ease.",
    features: ["Step-free entry", "Roll-in shower", "King bed", "Wi-Fi"],
  },
  {
    id: "family",
    title: "FAMILY ROOM",
    price: 85,
    maxGuests: 4,
    image: "/images/family.jpg",
    description: "Spacious room with multiple beds, perfect for families.",
    features: ["1 King + 2 Twins", "Mini kitchen", "Patio", "Wi-Fi"],
  },
  {
    id: "caravan",
    title: "CARAVAN & TRAILER PITCH",
    price: 40,
    maxGuests: 6,
    image: "/images/caravans.jpg",
    description: "Spacious caravan and trailer spaces with hookups and facilities.",
    features: ["Electric hookups", "Outdoor showers & toilets", "Wi-Fi nearby"],
  },
];

export function getRoom(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}

export function nightsBetween(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();
  if (isNaN(diff) || diff <= 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function calculateTotal(roomId: string, checkIn: string, checkOut: string): number {
  const room = getRoom(roomId);
  if (!room) return 0;
  const nights = nightsBetween(checkIn, checkOut);
  return nights * room.price;
}
