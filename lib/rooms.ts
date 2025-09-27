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
      "Designed with accessibility in mind, this suite provides comfort and inclusivity with step-free access and modern eco-friendly amenities.",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 70,
    maxGuests: 2,
    image: "/images/deluxe.jpg",
    description:
      "A refined room with elegant design, natural light, and sustainable features for a relaxing eco-luxury experience.",
  },
  {
    id: "family",
    name: "Family Room",
    price: 85,
    maxGuests: 4,
    image: "/images/family.jpg",
    description:
      "Spacious and welcoming, perfect for families or groups, offering eco-conscious comfort and plenty of room to unwind.",
  },
];
