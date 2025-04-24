import { mataasnakahoyBarangays } from "@/data/data";
import { UserPost } from "@/types/index.type";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface PetsReportsContextProps {
  lostPetsReports: UserPost[];
  foundPetsReports: UserPost[];
  loading: boolean;
}

export const PetsReportsContext = createContext<
  PetsReportsContextProps | undefined
>(undefined);

interface PetsReportsProviderProps {
  children: React.ReactNode;
}

const PetsReportsProvider = ({ children }: PetsReportsProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [lostPetsReports, setLostPetsReports] = useState<UserPost[]>([]);
  const [foundPetsReports, setFoundPetsReports] = useState<UserPost[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const lostPetData = Array.from({ length: 20 }).map((_, i) => ({
        user: {
          id: uuidv4(),
          firstName: `User${i + 1}`,
          lastName: `Lastname${i + 1}`,
          email: `user${i + 1}@example.com`,
        },
        post: {
          id: uuidv4(),
          title: `Lost Pet ${i + 1}`,
          status: ["active", "reunited"][Math.floor(Math.random() * 2)] as
            | "active"
            | "resolved"
            | "reunited",
          description: `Description for lost pet ${i + 1}`,
          type: "lost" as "lost" | "found",
          category: "pet" as "item" | "pet",
          dateLostFound: new Date(
            Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
          ).toISOString(),
          createdAt: new Date(
            Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
          ).toISOString(),
          location: {
            latitude: 13.9476 + Math.random() * 0.01,
            longitude: 121.1194 + Math.random() * 0.01,
            place: mataasnakahoyBarangays[Math.floor(Math.random() * 6)],
          },
        },
      }));
      const foundPetData = Array.from({ length: 20 }).map((_, i) => ({
        user: {
          id: uuidv4(),
          firstName: `User${i + 1}`,
          lastName: `Lastname${i + 1}`,
          email: `user${i + 1}@example.com`,
        },
        post: {
          id: uuidv4(),
          title: `Found Pet ${i + 1}`,
          status: ["active", "reunited"][Math.floor(Math.random() * 2)] as
            | "active"
            | "resolved"
            | "reunited",
          description: `Description for lost pet ${i + 1}`,
          type: "found" as "lost" | "found",
          category: "pet" as "item" | "pet",
          dateLostFound: new Date(
            Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
          ).toISOString(),
          createdAt: new Date(
            Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
          ).toISOString(),
          location: {
            latitude: 13.9476 + Math.random() * 0.01,
            longitude: 121.1194 + Math.random() * 0.01,
            place: mataasnakahoyBarangays[Math.floor(Math.random() * 6)],
          },
        },
      }));
      setLostPetsReports(lostPetData);
      setFoundPetsReports(foundPetData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <PetsReportsContext.Provider
      value={{ loading, lostPetsReports, foundPetsReports }}
    >
      {children}
    </PetsReportsContext.Provider>
  );
};

export default PetsReportsProvider;
