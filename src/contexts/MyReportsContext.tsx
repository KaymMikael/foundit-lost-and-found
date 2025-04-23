import { Post } from "@/types/index.type";
import { createContext, useMemo, useState } from "react";

interface MyReportsContextTypes {
  lostPosts: Post[];
  setLostPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  foundPosts: Post[];
  setFoundPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  reportsCreatedTotal: number;
  reunitedResolvedTotal: number;
  activeReportsTotal: number;
}

export const MyReportsContext = createContext<
  MyReportsContextTypes | undefined
>(undefined);

interface MyReportsProviderProps {
  children: React.ReactNode;
}

const MyReportsProvider = ({ children }: MyReportsProviderProps) => {
  const [foundPosts, setFoundPosts] = useState<Post[]>([
    {
      id: "1",
      title: "Found Mobile Phone",
      status: "active",
      description: "Found iPhone near barangay hall.",
      type: "found",
      category: "item",
      dateLostFound: "2025-04-10T00:00:00.000Z",
      location: {
        latitude: 13.9478,
        longitude: 121.1172,
        place: "Poblacion, Mataasnakahoy",
      },
      createdAt: "2025-04-11T09:00:00.000Z",
    },
    {
      id: "2",
      title: "Found Dog",
      status: "active",
      description: "Brown dog with red collar found wandering.",
      type: "found",
      category: "pet",
      dateLostFound: "2025-04-09T00:00:00.000Z",
      location: {
        latitude: 13.9485,
        longitude: 121.1183,
        place: "San Sebastian, Mataasnakahoy",
      },
      createdAt: "2025-04-10T08:45:00.000Z",
    },
    {
      id: "3",
      title: "Found Wallet",
      status: "resolved",
      description: "Leather wallet with school ID.",
      type: "found",
      category: "item",
      dateLostFound: "2025-04-08T00:00:00.000Z",
      location: {
        latitude: 13.9467,
        longitude: 121.1178,
        place: "Bayorbor, Mataasnakahoy",
      },
      createdAt: "2025-04-09T10:00:00.000Z",
    },
    {
      id: "4",
      title: "Found Cat",
      status: "active",
      description: "Orange cat seen near sari-sari store.",
      type: "found",
      category: "pet",
      dateLostFound: "2025-04-07T00:00:00.000Z",
      location: {
        latitude: 13.9473,
        longitude: 121.1165,
        place: "Barangay 3, Mataasnakahoy",
      },
      createdAt: "2025-04-08T11:00:00.000Z",
    },
    {
      id: "5",
      title: "Found Backpack",
      status: "active",
      description: "Blue bag left on bench.",
      type: "found",
      category: "item",
      dateLostFound: "2025-04-06T00:00:00.000Z",
      location: {
        latitude: 13.9499,
        longitude: 121.1195,
        place: "Town Plaza, Mataasnakahoy",
      },
      createdAt: "2025-04-07T09:20:00.000Z",
    },
    {
      id: "6",
      title: "Found Keys",
      status: "reunited",
      description: "Bunch of keys with green tag.",
      type: "found",
      category: "item",
      dateLostFound: "2025-04-05T00:00:00.000Z",
      location: {
        latitude: 13.9445,
        longitude: 121.1171,
        place: "San Carlos, Mataasnakahoy",
      },
      createdAt: "2025-04-06T10:30:00.000Z",
    },
    {
      id: "7",
      title: "Found Hamster",
      status: "active",
      description: "Small white hamster seen on road.",
      type: "found",
      category: "pet",
      dateLostFound: "2025-04-04T00:00:00.000Z",
      location: {
        latitude: 13.9459,
        longitude: 121.1162,
        place: "Barangay 5, Mataasnakahoy",
      },
      createdAt: "2025-04-05T08:15:00.000Z",
    },
    {
      id: "8",
      title: "Found Watch",
      status: "active",
      description: "Silver analog watch found near plaza.",
      type: "found",
      category: "item",
      dateLostFound: "2025-04-03T00:00:00.000Z",
      location: {
        latitude: 13.948,
        longitude: 121.1187,
        place: "Poblacion, Mataasnakahoy",
      },
      createdAt: "2025-04-04T12:00:00.000Z",
    },
    {
      id: "9",
      title: "Found Puppy",
      status: "active",
      description: "White puppy with black patch on eye.",
      type: "found",
      category: "pet",
      dateLostFound: "2025-04-02T00:00:00.000Z",
      location: {
        latitude: 13.9495,
        longitude: 121.1175,
        place: "Barangay 1, Mataasnakahoy",
      },
      createdAt: "2025-04-03T07:45:00.000Z",
    },
    {
      id: "10",
      title: "Found Umbrella",
      status: "active",
      description: "Purple umbrella found in tricycle.",
      type: "found",
      category: "item",
      dateLostFound: "2025-04-01T00:00:00.000Z",
      location: {
        latitude: 13.9468,
        longitude: 121.1182,
        place: "San Juan, Mataasnakahoy",
      },
      createdAt: "2025-04-02T10:10:00.000Z",
    },
    {
      id: "11",
      title: "Found Earphones",
      status: "resolved",
      description: "Bluetooth earphones found in school gym.",
      type: "found",
      category: "item",
      dateLostFound: "2025-03-31T00:00:00.000Z",
      location: {
        latitude: 13.9455,
        longitude: 121.1191,
        place: "MNHS, Mataasnakahoy",
      },
      createdAt: "2025-04-01T08:00:00.000Z",
    },
    {
      id: "12",
      title: "Found Cat Collar",
      status: "active",
      description: "Pink collar with bell found on sidewalk.",
      type: "found",
      category: "item",
      dateLostFound: "2025-03-30T00:00:00.000Z",
      location: {
        latitude: 13.9481,
        longitude: 121.1169,
        place: "Barangay 4, Mataasnakahoy",
      },
      createdAt: "2025-03-31T13:00:00.000Z",
    },
    {
      id: "13",
      title: "Found Pet Parrot",
      status: "reunited",
      description: "Green parrot found near mango tree.",
      type: "found",
      category: "pet",
      dateLostFound: "2025-03-29T00:00:00.000Z",
      location: {
        latitude: 13.9446,
        longitude: 121.1184,
        place: "San Felix, Mataasnakahoy",
      },
      createdAt: "2025-03-30T11:20:00.000Z",
    },
    {
      id: "14",
      title: "Found Book",
      status: "active",
      description: "Science book labeled 'Grade 10'.",
      type: "found",
      category: "item",
      dateLostFound: "2025-03-28T00:00:00.000Z",
      location: {
        latitude: 13.947,
        longitude: 121.1199,
        place: "Public Market, Mataasnakahoy",
      },
      createdAt: "2025-03-29T09:40:00.000Z",
    },
    {
      id: "15",
      title: "Found Gold Ring",
      status: "active",
      description: "Found gold ring with initials engraved.",
      type: "found",
      category: "item",
      dateLostFound: "2025-03-27T00:00:00.000Z",
      location: {
        latitude: 13.9462,
        longitude: 121.1167,
        place: "Nangkaan, Mataasnakahoy",
      },
      createdAt: "2025-03-28T10:30:00.000Z",
    },
    {
      id: "16",
      title: "Found Chihuahua",
      status: "resolved",
      description: "White chihuahua, no tag.",
      type: "found",
      category: "pet",
      dateLostFound: "2025-03-26T00:00:00.000Z",
      location: {
        latitude: 13.9439,
        longitude: 121.1176,
        place: "San Mateo, Mataasnakahoy",
      },
      createdAt: "2025-03-27T12:00:00.000Z",
    },
    {
      id: "17",
      title: "Found Water Bottle",
      status: "active",
      description: "Black insulated bottle, left at chapel.",
      type: "found",
      category: "item",
      dateLostFound: "2025-03-25T00:00:00.000Z",
      location: {
        latitude: 13.9453,
        longitude: 121.1172,
        place: "Chapel, Mataasnakahoy",
      },
      createdAt: "2025-03-26T09:00:00.000Z",
    },
    {
      id: "18",
      title: "Found Drawing Pad",
      status: "active",
      description: "Sketch pad with pencil drawings.",
      type: "found",
      category: "item",
      dateLostFound: "2025-03-24T00:00:00.000Z",
      location: {
        latitude: 13.9491,
        longitude: 121.1164,
        place: "Municipal Park, Mataasnakahoy",
      },
      createdAt: "2025-03-25T08:15:00.000Z",
    },
    {
      id: "19",
      title: "Found Student ID",
      status: "active",
      description: "MNHS ID with name still visible.",
      type: "found",
      category: "item",
      dateLostFound: "2025-03-23T00:00:00.000Z",
      location: {
        latitude: 13.9443,
        longitude: 121.1193,
        place: "Barangay 6, Mataasnakahoy",
      },
      createdAt: "2025-03-24T11:00:00.000Z",
    },
    {
      id: "20",
      title: "Found Pet Collar",
      status: "active",
      description: "Blue collar with tiny bell, found near school.",
      type: "found",
      category: "item",
      dateLostFound: "2025-03-22T00:00:00.000Z",
      location: {
        latitude: 13.9472,
        longitude: 121.1171,
        place: "Mataasnakahoy Elementary School, Mataasnakahoy",
      },
      createdAt: "2025-03-23T14:00:00.000Z",
    },
  ]);
  const [lostPosts, setLostPosts] = useState<Post[]>([
    {
      id: "1",
      title: "Lost Wallet",
      status: "active",
      description: "Black leather wallet with IDs and cash.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-04-10T00:00:00.000Z",
      location: {
        latitude: 13.9478,
        longitude: 121.1172,
        place: "Poblacion, Mataasnakahoy",
      },
      createdAt: "2025-04-11T08:00:00.000Z",
    },
    {
      id: "2",
      title: "Missing Shih Tzu",
      status: "active",
      description: "White Shih Tzu with blue collar. Very friendly.",
      type: "lost",
      category: "pet",
      dateLostFound: "2025-04-09T00:00:00.000Z",
      location: {
        latitude: 13.949,
        longitude: 121.1185,
        place: "San Sebastian, Mataasnakahoy",
      },
      createdAt: "2025-04-10T09:15:00.000Z",
    },
    {
      id: "3",
      title: "Lost Keys",
      status: "resolved",
      description: "Set of car and house keys with red keychain.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-04-08T00:00:00.000Z",
      location: {
        latitude: 13.945,
        longitude: 121.1201,
        place: "Barangay 4, Mataasnakahoy",
      },
      createdAt: "2025-04-09T12:30:00.000Z",
    },
    {
      id: "4",
      title: "Lost Cat",
      status: "active",
      description: "Orange tabby cat, answers to 'Ming'.",
      type: "lost",
      category: "pet",
      dateLostFound: "2025-04-07T00:00:00.000Z",
      location: {
        latitude: 13.9482,
        longitude: 121.1213,
        place: "Nangkaan, Mataasnakahoy",
      },
      createdAt: "2025-04-08T11:00:00.000Z",
    },
    {
      id: "5",
      title: "Lost Phone",
      status: "active",
      description: "Samsung Galaxy S22 in a green case.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-04-06T00:00:00.000Z",
      location: {
        latitude: 13.9469,
        longitude: 121.1188,
        place: "Bayorbor, Mataasnakahoy",
      },
      createdAt: "2025-04-07T08:45:00.000Z",
    },
    {
      id: "6",
      title: "Lost Dog",
      status: "reunited",
      description: "Black Labrador, wearing a red harness.",
      type: "lost",
      category: "pet",
      dateLostFound: "2025-04-05T00:00:00.000Z",
      location: {
        latitude: 13.9442,
        longitude: 121.1157,
        place: "San Felix, Mataasnakahoy",
      },
      createdAt: "2025-04-06T10:00:00.000Z",
    },
    {
      id: "7",
      title: "Lost Watch",
      status: "active",
      description: "Silver Seiko watch left at tricycle terminal.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-04-03T00:00:00.000Z",
      location: {
        latitude: 13.95,
        longitude: 121.116,
        place: "San Juan, Mataasnakahoy",
      },
      createdAt: "2025-04-04T09:30:00.000Z",
    },
    {
      id: "8",
      title: "Lost Puppy",
      status: "active",
      description: "Small brown puppy lost near public market.",
      type: "lost",
      category: "pet",
      dateLostFound: "2025-04-02T00:00:00.000Z",
      location: {
        latitude: 13.9485,
        longitude: 121.1179,
        place: "Public Market, Mataasnakahoy",
      },
      createdAt: "2025-04-03T07:20:00.000Z",
    },
    {
      id: "9",
      title: "Lost Backpack",
      status: "resolved",
      description: "Blue Jansport with school books and charger.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-04-01T00:00:00.000Z",
      location: {
        latitude: 13.9471,
        longitude: 121.12,
        place: "Mataasnakahoy National High School, Mataasnakahoy",
      },
      createdAt: "2025-04-02T08:00:00.000Z",
    },
    {
      id: "10",
      title: "Lost Earrings",
      status: "active",
      description: "Pair of pearl earrings lost at plaza.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-03-30T00:00:00.000Z",
      location: {
        latitude: 13.9492,
        longitude: 121.118,
        place: "Town Plaza, Mataasnakahoy",
      },
      createdAt: "2025-04-01T14:00:00.000Z",
    },
    {
      id: "11",
      title: "Lost Tablet",
      status: "active",
      description: "iPad mini with cracked screen.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-03-29T00:00:00.000Z",
      location: {
        latitude: 13.9465,
        longitude: 121.1174,
        place: "Barangay 2, Mataasnakahoy",
      },
      createdAt: "2025-03-30T10:00:00.000Z",
    },
    {
      id: "12",
      title: "Lost Hamster",
      status: "active",
      description: "Tiny grey hamster escaped its cage.",
      type: "lost",
      category: "pet",
      dateLostFound: "2025-03-28T00:00:00.000Z",
      location: {
        latitude: 13.9453,
        longitude: 121.1181,
        place: "San Carlos, Mataasnakahoy",
      },
      createdAt: "2025-03-29T09:15:00.000Z",
    },
    {
      id: "13",
      title: "Lost Gold Necklace",
      status: "active",
      description: "Gold necklace with heart pendant.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-03-27T00:00:00.000Z",
      location: {
        latitude: 13.9495,
        longitude: 121.1166,
        place: "Barangay 1, Mataasnakahoy",
      },
      createdAt: "2025-03-28T14:30:00.000Z",
    },
    {
      id: "14",
      title: "Lost Chihuahua",
      status: "reunited",
      description: "Small white chihuahua named 'Tiny'.",
      type: "lost",
      category: "pet",
      dateLostFound: "2025-03-26T00:00:00.000Z",
      location: {
        latitude: 13.9435,
        longitude: 121.1192,
        place: "Barangay 3, Mataasnakahoy",
      },
      createdAt: "2025-03-27T12:00:00.000Z",
    },
    {
      id: "15",
      title: "Lost USB Drive",
      status: "active",
      description: "8GB Kingston USB with thesis files.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-03-25T00:00:00.000Z",
      location: {
        latitude: 13.9448,
        longitude: 121.1189,
        place: "Barangay Bayorbor, Mataasnakahoy",
      },
      createdAt: "2025-03-26T08:00:00.000Z",
    },
    {
      id: "16",
      title: "Lost Birth Certificate",
      status: "resolved",
      description: "Original birth certificate inside brown envelope.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-03-24T00:00:00.000Z",
      location: {
        latitude: 13.9477,
        longitude: 121.1195,
        place: "Municipal Hall Area, Mataasnakahoy",
      },
      createdAt: "2025-03-25T11:30:00.000Z",
    },
    {
      id: "17",
      title: "Lost Glasses",
      status: "active",
      description: "Black-rimmed prescription glasses.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-03-23T00:00:00.000Z",
      location: {
        latitude: 13.9463,
        longitude: 121.1173,
        place: "San Mateo, Mataasnakahoy",
      },
      createdAt: "2025-03-24T07:00:00.000Z",
    },
    {
      id: "18",
      title: "Lost Slippers",
      status: "active",
      description: "Blue Havaianas slippers left at chapel.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-03-22T00:00:00.000Z",
      location: {
        latitude: 13.9458,
        longitude: 121.1164,
        place: "Chapel Area, Mataasnakahoy",
      },
      createdAt: "2025-03-23T10:00:00.000Z",
    },
    {
      id: "19",
      title: "Lost Math Notebook",
      status: "active",
      description: "Yellow notebook with calculus notes.",
      type: "lost",
      category: "item",
      dateLostFound: "2025-03-21T00:00:00.000Z",
      location: {
        latitude: 13.9449,
        longitude: 121.1186,
        place: "School Grounds, Mataasnakahoy",
      },
      createdAt: "2025-03-22T09:30:00.000Z",
    },
    {
      id: "20",
      title: "Lost Pet Parrot",
      status: "active",
      description: "Green parrot named 'Polly', can say 'Hello'.",
      type: "lost",
      category: "pet",
      dateLostFound: "2025-03-20T00:00:00.000Z",
      location: {
        latitude: 13.9438,
        longitude: 121.1198,
        place: "Barangay 5, Mataasnakahoy",
      },
      createdAt: "2025-03-21T08:00:00.000Z",
    },
  ]);
  const reportsCreatedTotal = useMemo(
    () => lostPosts.length + foundPosts.length,
    [lostPosts, foundPosts]
  );
  const reunitedResolvedTotal = useMemo(
    () =>
      lostPosts.filter(
        (post) => post.status === "resolved" || post.status === "reunited"
      ).length +
      foundPosts.filter(
        (post) => post.status === "resolved" || post.status === "reunited"
      ).length,
    [lostPosts, foundPosts]
  );
  const activeReportsTotal = useMemo(
    () =>
      lostPosts.filter((post) => post.status === "active").length +
      foundPosts.filter((post) => post.status === "active").length,
    [lostPosts, foundPosts]
  );

  return (
    <MyReportsContext.Provider
      value={{
        foundPosts,
        setFoundPosts,
        setLostPosts,
        lostPosts,
        reportsCreatedTotal,
        reunitedResolvedTotal,
        activeReportsTotal,
      }}
    >
      {children}
    </MyReportsContext.Provider>
  );
};

export default MyReportsProvider;
