/**
 * Simple availability model for demo purposes.
 * You can later replace this with a DB or an external calendar.
 *
 * Date strings are in YYYY-MM-DD. Ranges are half-open:
 * start is inclusive, end is exclusive (like hotel nights).
 */

export type BookingRange = {
  roomId: string;
  start: string; // YYYY-MM-DD inclusive
  end: string;   // YYYY-MM-DD exclusive
};

// Example booked ranges (mock). Adjust as needed.
export const booked: BookingRange[] = [
  // Deluxe booked: 2025-10-03 to 2025-10-06 (nights: 3)
  { roomId: "deluxe", start: "2025-10-03", end: "2025-10-06" },
  // Accessible booked: 2025-10-10 to 2025-10-12
  { roomId: "accessible", start: "2025-10-10", end: "2025-10-12" },
  // Family booked: 2025-10-20 to 2025-10-22
  { roomId: "family", start: "2025-10-20", end: "2025-10-22" },
  // Caravan booked: 2025-10-15 to 2025-10-17
  { roomId: "caravan", start: "2025-10-15", end: "2025-10-17" },
];

// ---- Date utilities ----
export function toDate(d: string): Date {
  // Treat as local date (no time zone math for simplicity)
  const [y, m, day] = d.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, day ?? 1);
}

export function formatYYYYMMDD(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Returns true if two half-open ranges [aStart, aEnd) and [bStart, bEnd) overlap */
export function rangesOverlap(aStart: string, aEnd: string, bStart: string, bEnd: string): boolean {
  const aS = toDate(aStart).getTime();
  const aE = toDate(aEnd).getTime();
  const bS = toDate(bStart).getTime();
  const bE = toDate(bEnd).getTime();
  // overlap if aStart < bEnd && bStart < aEnd
  return aS < bE && bS < aE;
}

/** Check if a given half-open range is available for a specific room */
export function isRangeAvailable(roomId: string, start: string, end: string): boolean {
  if (!roomId || !start || !end) return false;
  if (toDate(start).getTime() >= toDate(end).getTime()) return false;
  const conflicts = booked.filter(b => b.roomId === roomId && rangesOverlap(start, end, b.start, b.end));
  return conflicts.length === 0;
}

/** Returns today's date (YYYY-MM-DD) */
export function today(): string {
  return formatYYYYMMDD(new Date());
}
