export const rooms: Record<string, { name: string; price: number; maxGuests: number; image: string }> = {
  deluxe: { name: "Deluxe Room", price: 200, maxGuests: 3, image: "/images/deluxe.jpg" },
  accessible: { name: "Accessible Suite", price: 150, maxGuests: 2, image: "/images/accessible.jpg" },
  family: { name: "Family Room", price: 250, maxGuests: 5, image: "/images/family.jpg" },
};

export function calculateTotal(roomId: string, checkIn: string, checkOut: string): number {
  const room = rooms[roomId];
  if (!room) return 0;

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  if (!(start instanceof Date) || !(end instanceof Date) || isNaN(start.getTime()) || isNaN(end.getTime())) {
    return 0;
  }

  if (end <= start) return 0;

  const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return nights * room.price;
}
