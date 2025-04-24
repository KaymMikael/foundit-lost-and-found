import { mataasnakahoyBarangays } from "@/data/data";
import useUser from "@/hooks/useUser";
import { User, UserPost } from "@/types/index.type";
import { getRandomFromArray } from "@/utils/reports";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ReportsContextProps {
  posts: UserPost[];
  setPosts: React.Dispatch<React.SetStateAction<UserPost[]>>;
  loading: boolean;
}

export const ReportsContext = createContext<ReportsContextProps | undefined>(
  undefined
);

interface ReportsProviderProps {
  children: React.ReactNode;
}

const mockUsers: User[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `user-${i + 1}`,
  firstName: `User${i + 1}`,
  lastName: `Test`,
  email: `user${i + 1}@example.com`,
}));

const ReportsProvider = ({ children }: ReportsProviderProps) => {
  const { user } = useUser();
  const [posts, setPosts] = useState<UserPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const userLostPostData = Array.from({ length: 20 }).map((_, i) => {
        const category = i % 2 === 0 ? "item" : "pet";
        const title =
          category === "item"
            ? getRandomFromArray([
                "Lost Wallet",
                "Lost Phone",
                "Lost Bag",
                "Lost Keys",
              ])
            : getRandomFromArray([
                "Lost Dog",
                "Lost Cat",
                "Lost Bird",
                "Lost Turtle",
              ]);

        const status =
          category === "item"
            ? getRandomFromArray(["active", "resolved"])
            : getRandomFromArray(["active", "reunited"]);

        return {
          user,
          post: {
            id: uuidv4(),
            title,
            status: status as "active" | "reunited" | "resolved",
            description: `Description for ${title.toLowerCase()}`,
            type: "lost" as "lost" | "found",
            category: category as "item" | "pet",
            dateLostFound: new Date(Date.now() - i * 86400000).toISOString(),
            createdAt: new Date(
              Date.now() - i * 86400000 + 3600000
            ).toISOString(),
            location: {
              latitude: 13.9476 + Math.random() * 0.01,
              longitude: 121.1194 + Math.random() * 0.01,
              place: mataasnakahoyBarangays[i % mataasnakahoyBarangays.length],
            },
          },
        };
      });
      const userFoundPostData = Array.from({ length: 20 }).map((_, i) => {
        const category = i % 2 === 0 ? "item" : "pet";
        const title =
          category === "item"
            ? getRandomFromArray([
                "Found Wallet",
                "Found Phone",
                "Found Bag",
                "Found Keys",
              ])
            : getRandomFromArray([
                "Found Dog",
                "Found Cat",
                "Found Bird",
                "Found Turtle",
              ]);

        const status =
          category === "item"
            ? getRandomFromArray(["active", "resolved"])
            : getRandomFromArray(["active", "reunited"]);

        return {
          user,
          post: {
            id: uuidv4(),
            title,
            status: status as "active" | "reunited" | "resolved",
            description: `Description for ${title.toLowerCase()}`,
            type: "found" as "lost" | "found",
            category: category as "item" | "pet",
            dateLostFound: new Date(Date.now() - i * 86400000).toISOString(),
            createdAt: new Date(
              Date.now() - i * 86400000 + 3600000
            ).toISOString(),
            location: {
              latitude: 13.9476 + Math.random() * 0.01,
              longitude: 121.1194 + Math.random() * 0.01,
              place: mataasnakahoyBarangays[i % mataasnakahoyBarangays.length],
            },
          },
        };
      });
      const lostItemsData = Array.from({ length: 20 }, (_, i) => {
        const randomUser =
          mockUsers[Math.floor(Math.random() * mockUsers.length)];

        const category = "item" as "item" | "pet";

        const title = getRandomFromArray([
          "Lost Wallet",
          "Lost Phone",
          "Lost Bag",
          "Lost Keys",
        ]);

        const status = getRandomFromArray(["active", "resolved"]);

        return {
          user: randomUser,
          post: {
            id: uuidv4(),
            title,
            status: status as "active" | "reunited" | "resolved",
            description: `Description for ${title.toLowerCase()}`,
            type: "lost" as "lost" | "found",
            category,
            dateLostFound: new Date(Date.now() - i * 86400000).toISOString(),
            createdAt: new Date(
              Date.now() - i * 86400000 + 3600000
            ).toISOString(),
            location: {
              latitude: 13.9476 + Math.random() * 0.01,
              longitude: 121.1194 + Math.random() * 0.01,
              place: mataasnakahoyBarangays[i % mataasnakahoyBarangays.length],
            },
          },
        };
      });
      const foundItemsData = Array.from({ length: 20 }, (_, i) => {
        const randomUser =
          mockUsers[Math.floor(Math.random() * mockUsers.length)];

        const category = "item" as "item" | "pet";

        const title = getRandomFromArray([
          "Lost Wallet",
          "Lost Phone",
          "Lost Bag",
          "Lost Keys",
        ]);

        const status = getRandomFromArray(["active", "resolved"]);
        return {
          user: randomUser,
          post: {
            id: uuidv4(),
            title,
            status: status as "active" | "reunited" | "resolved",
            description: `Description for found item ${i + 1}`,
            type: "found" as "lost" | "found",
            category,
            dateLostFound: new Date(Date.now() - i * 86400000).toISOString(),
            createdAt: new Date(
              Date.now() - i * 86400000 + 3600000
            ).toISOString(),
            location: {
              latitude: 13.9476 + Math.random() * 0.01,
              longitude: 121.1194 + Math.random() * 0.01,
              place: mataasnakahoyBarangays[i % mataasnakahoyBarangays.length],
            },
          },
        };
      });

      setPosts([
        ...userLostPostData,
        ...userFoundPostData,
        ...lostItemsData,
        ...foundItemsData,
      ]);
      setLoading(false);
    }, 2000);
  }, [user]);

  return (
    <ReportsContext.Provider value={{ posts, setPosts, loading }}>
      {children}
    </ReportsContext.Provider>
  );
};

export default ReportsProvider;
