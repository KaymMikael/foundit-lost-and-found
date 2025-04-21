export const fetchAddress = async (lat: number, long: number) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`
  );
  const data = await response.json();
  return data.display_name as string || "Unknown location";
};
