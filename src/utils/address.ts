export const fetchAddress = async (lat: number, long: number) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`
  );
  const data = await response.json();
  const display_name = data.display_name.toLowerCase();
  return display_name || "unknown location";
};
