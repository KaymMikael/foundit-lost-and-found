export interface Post {
  id: string;
  title: string;
  status: "active" | "reunited" | "found";
  description: string;
  type: "lost" | "found";
  category: "item" | "pet";
  dateLostFound: string;
  location: { latitude: number; longitude: number; place: string };
  createdAt: string;
}
