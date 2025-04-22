import { formatDistance } from "date-fns";

export const getDistance = (from: string | Date, to: Date) => {
  return formatDistance(from, to);
};
