import { mataasnakahoyBarangays } from "@/data/data";
import { UserPost } from "@/types/index.type";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ItemsReportsContext {
  lostItemsReports: UserPost[];
  setLostItemsReports: React.Dispatch<React.SetStateAction<UserPost[]>>;
  foundItemsReports: UserPost[];
  setFoundItemsReports: React.Dispatch<React.SetStateAction<UserPost[]>>;
  loading: boolean;
}

export const ItemsReportsContext = createContext<
  ItemsReportsContext | undefined
>(undefined);

interface ItemsReportsProviderProps {
  children: React.ReactNode;
}

const ItemsReportsProvider = ({ children }: ItemsReportsProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [lostItemsReports, setLostItemsReports] = useState<UserPost[]>([]);
  const [foundItemsReports, setFoundItemsReports] = useState<UserPost[]>(
    Array.from({ length: 20 }).map((_, i) => ({
      user: {
        id: uuidv4(),
        firstName: `User${i + 1}`,
        lastName: `Lastname${i + 1}`,
        email: `user${i + 1}@example.com`,
      },
      post: {
        id: uuidv4(),
        title: `Lost Item ${i + 1}`,
        status: ["active", "resolved"][Math.floor(Math.random() * 2)] as
          | "active"
          | "resolved",
        description: `Description for lost item ${i + 1}`,
        type: "lost",
        category: "item",
        dateLostFound: new Date(
          Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
        ).toISOString(),
        createdAt: new Date(
          Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
        ).toISOString(),
        location: {
          latitude: 13.9476 + Math.random() * 0.01,
          longitude: 121.1194 + Math.random() * 0.01,
          place: [
            "Poblacion, Mataasnakahoy",
            "Barangay 2, Mataasnakahoy",
            "San Sebastian, Mataasnakahoy",
            "Barangay 4, Mataasnakahoy",
            "Barangay 1, Mataasnakahoy",
            "Bayorbor, Mataasnakahoy",
          ][Math.floor(Math.random() * 6)],
        },
      },
    }))
  );

  useEffect(() => {
    setTimeout(() => {
      const data = Array.from({ length: 20 }).map((_, i) => ({
        user: {
          id: uuidv4(),
          firstName: `User${i + 1}`,
          lastName: `Lastname${i + 1}`,
          email: `user${i + 1}@example.com`,
        },
        post: {
          id: uuidv4(),
          title: `Lost Item ${i + 1}`,
          status: ["active", "resolved"][Math.floor(Math.random() * 2)] as
            | "active"
            | "resolved"
            | "reunited",
          description: `Description for lost item ${i + 1}`,
          type: "lost" as "lost" | "found",
          category: "item" as "item" | "pet",
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
      const data2 = Array.from({ length: 20 }).map((_, i) => ({
        user: {
          id: uuidv4(),
          firstName: `User${i + 1}`,
          lastName: `Lastname${i + 1}`,
          email: `user${i + 1}@example.com`,
        },
        post: {
          id: uuidv4(),
          title: `Found Item ${i + 1}`,
          status: ["active", "resolved"][Math.floor(Math.random() * 2)] as
            | "active"
            | "resolved"
            | "reunited",
          description: `Description for lost item ${i + 1}`,
          type: "found" as "lost" | "found",
          category: "item" as "item" | "pet",
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
      setLostItemsReports(data);
      setFoundItemsReports(data2);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <ItemsReportsContext.Provider
      value={{
        lostItemsReports,
        setLostItemsReports,
        foundItemsReports,
        setFoundItemsReports,
        loading,
      }}
    >
      {children}
    </ItemsReportsContext.Provider>
  );
};

export default ItemsReportsProvider;
