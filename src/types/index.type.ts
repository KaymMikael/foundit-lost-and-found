export interface Post {
  id: string;
  title: string;
  status: "active" | "reunited" | "resolved";
  description: string;
  type: "lost" | "found";
  category: "item" | "pet";
  dateLostFound: string; // iso string
  location: { latitude: number; longitude: number; place: string };
  createdAt: string; // iso string
}
