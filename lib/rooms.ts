export type Room = {
  id: string;
  name: string;
  price: number;
  maxGuests: number;
  image: string;
  description: string;
};

export const rooms: Room[] = [
  {
    id: "accessible",
    name: "Accessible Suite",
    price: 70,
    maxGuests: 2,
    image: "/images/accessible.jpg",
    description:
      "Thoughtfully designed suite with accessible features and serene surroundings.",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 70,
    maxGuests: 2,
    image: "/images/deluxe.jpg",
    description:
      "A refined room offering comfort, style, and connection to nature.",
  },
  {
    id: "family",
    name: "Family Room",
    price: 85,
    maxGuests: 4,
    image: "/images/family.jpg",
    description:
      "Spacious accommodation for families with cozy interiors and garden views.",
  },
];
