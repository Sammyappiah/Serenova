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
      "Designed for comfort and accessibility, this eco-friendly suite offers step-free access, spacious interiors, and modern amenities for a seamless stay.",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 70,
    maxGuests: 2,
    image: "/images/deluxe.jpg",
    description:
      "Our deluxe room combines modern luxury with sustainable design. Perfect for couples, it features serene views, plush bedding, and natural finishes.",
  },
  {
    id: "family",
    name: "Family Room",
    price: 85,
    maxGuests: 4,
    image: "/images/family.jpg",
    description:
      "Spacious and welcoming, the family room provides ample space for groups or families, with eco-conscious materials and a cozy atmosphere.",
  },
];
