import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyReportCard from "@/components/my-report-card";
import { Input } from "@/components/ui/input";
import { Post } from "@/types/index.type";
import ReportsGridLayout from "./reports-grid-layout";

const lostPosts: Post[] = [
  {
    id: "lost-001",
    title: "Lost School ID",
    status: "active",
    description: "ID card from San Juan High School, blue lanyard.",
    type: "lost",
    category: "item",
    dateLostFound: "2025-04-14T10:00:00.000Z",
    location: {
      latitude: 13.9352,
      longitude: 121.0957,
      place: "Near Barangay Hall",
    },
    createdAt: "2025-04-14T12:00:00.000Z",
  },
  {
    id: "lost-002",
    title: "Missing Golden Retriever",
    status: "reunited",
    description: "Answers to the name 'Buddy'. Last seen near plaza.",
    type: "lost",
    category: "pet",
    dateLostFound: "2025-04-12T15:30:00.000Z",
    location: {
      latitude: 13.937,
      longitude: 121.0969,
      place: "Mataasnakahoy Plaza",
    },
    createdAt: "2025-04-12T16:00:00.000Z",
  },
  {
    id: "lost-003",
    title: "Lost iPhone 12",
    status: "active",
    description: "Black iPhone with cracked screen. Reward offered.",
    type: "lost",
    category: "item",
    dateLostFound: "2025-04-10T14:45:00.000Z",
    location: {
      latitude: 13.9381,
      longitude: 121.1012,
      place: "San Sebastian Church",
    },
    createdAt: "2025-04-10T18:00:00.000Z",
  },
  {
    id: "lost-004",
    title: "Lost Cat - Orange Tabby",
    status: "active",
    description: "Wearing red collar, very friendly.",
    type: "lost",
    category: "pet",
    dateLostFound: "2025-04-08T17:00:00.000Z",
    location: {
      latitude: 13.9345,
      longitude: 121.098,
      place: "Near school gate",
    },
    createdAt: "2025-04-08T20:00:00.000Z",
  },
  {
    id: "lost-005",
    title: "Misplaced Backpack",
    status: "resolved",
    description: "Gray backpack with school books and water bottle.",
    type: "lost",
    category: "item",
    dateLostFound: "2025-04-07T08:15:00.000Z",
    location: {
      latitude: 13.9331,
      longitude: 121.0924,
      place: "Covered Court",
    },
    createdAt: "2025-04-07T09:00:00.000Z",
  },
  {
    id: "lost-006",
    title: "Lost Pet Rabbit",
    status: "active",
    description: "White rabbit with pink nose. Escaped cage.",
    type: "lost",
    category: "pet",
    dateLostFound: "2025-04-06T13:00:00.000Z",
    location: {
      latitude: 13.9355,
      longitude: 121.093,
      place: "Backyard, Brgy. IV",
    },
    createdAt: "2025-04-06T14:00:00.000Z",
  },
  {
    id: "lost-007",
    title: "Left Headphones at Park",
    status: "active",
    description: "Sony headphones in black case.",
    type: "lost",
    category: "item",
    dateLostFound: "2025-04-05T16:00:00.000Z",
    location: { latitude: 13.9312, longitude: 121.0978, place: "Plaza Bench" },
    createdAt: "2025-04-05T17:15:00.000Z",
  },
  {
    id: "lost-008",
    title: "Lost Toy Dog",
    status: "resolved",
    description: "Brown stuffed toy left in jeepney.",
    type: "lost",
    category: "item",
    dateLostFound: "2025-04-03T10:20:00.000Z",
    location: {
      latitude: 13.9369,
      longitude: 121.0965,
      place: "Tricycle Terminal",
    },
    createdAt: "2025-04-03T11:00:00.000Z",
  },
  {
    id: "lost-009",
    title: "Missing Cat Named Luna",
    status: "active",
    description: "Gray cat with bell. Escaped during thunderstorm.",
    type: "lost",
    category: "pet",
    dateLostFound: "2025-04-02T18:00:00.000Z",
    location: {
      latitude: 13.9339,
      longitude: 121.0948,
      place: "Brgy. Bayorbor",
    },
    createdAt: "2025-04-02T18:30:00.000Z",
  },
  {
    id: "lost-010",
    title: "Lost Notebook",
    status: "active",
    description: "Blue notebook with math notes. Left at gym.",
    type: "lost",
    category: "item",
    dateLostFound: "2025-04-01T09:00:00.000Z",
    location: {
      latitude: 13.9377,
      longitude: 121.0911,
      place: "Mataasnakahoy Gym",
    },
    createdAt: "2025-04-01T10:00:00.000Z",
  },
];

const foundPosts: Post[] = [
  {
    id: "found-001",
    title: "Found Wallet",
    status: "active",
    description: "Black leather wallet with IDs inside.",
    type: "found",
    category: "item",
    dateLostFound: "2025-04-14T12:30:00.000Z",
    location: { latitude: 13.934, longitude: 121.0975, place: "Beside Bakery" },
    createdAt: "2025-04-14T13:00:00.000Z",
  },
  {
    id: "found-002",
    title: "Found Puppy",
    status: "resolved",
    description: "Small brown puppy found roaming around.",
    type: "found",
    category: "pet",
    dateLostFound: "2025-04-13T17:00:00.000Z",
    location: {
      latitude: 13.9322,
      longitude: 121.0963,
      place: "Near Daycare Center",
    },
    createdAt: "2025-04-13T18:00:00.000Z",
  },
  {
    id: "found-003",
    title: "Found Mobile Phone",
    status: "active",
    description: "Oppo phone, cracked screen, found on bench.",
    type: "found",
    category: "item",
    dateLostFound: "2025-04-11T09:45:00.000Z",
    location: {
      latitude: 13.9371,
      longitude: 121.098,
      place: "Basketball Court",
    },
    createdAt: "2025-04-11T10:00:00.000Z",
  },
  {
    id: "found-004",
    title: "Found Cat - White and Gray",
    status: "active",
    description: "Wearing red ribbon, friendly, possibly a house pet.",
    type: "found",
    category: "pet",
    dateLostFound: "2025-04-10T16:30:00.000Z",
    location: {
      latitude: 13.9356,
      longitude: 121.0932,
      place: "School Parking",
    },
    createdAt: "2025-04-10T17:00:00.000Z",
  },
  {
    id: "found-005",
    title: "Found Notebook",
    status: "reunited",
    description: "Science notes inside, name on cover: Julia D.",
    type: "found",
    category: "item",
    dateLostFound: "2025-04-09T14:00:00.000Z",
    location: { latitude: 13.9384, longitude: 121.0991, place: "Classroom B" },
    createdAt: "2025-04-09T14:30:00.000Z",
  },
  {
    id: "found-006",
    title: "Found Lost Parrot",
    status: "active",
    description: "Green parrot repeating words. Found on balcony.",
    type: "found",
    category: "pet",
    dateLostFound: "2025-04-08T07:30:00.000Z",
    location: {
      latitude: 13.9349,
      longitude: 121.0914,
      place: "Apartment Complex",
    },
    createdAt: "2025-04-08T08:00:00.000Z",
  },
  {
    id: "found-007",
    title: "Found Black Bag",
    status: "active",
    description: "Bag with clothes and charger. No ID inside.",
    type: "found",
    category: "item",
    dateLostFound: "2025-04-07T19:00:00.000Z",
    location: {
      latitude: 13.9327,
      longitude: 121.0956,
      place: "Terminal Waiting Area",
    },
    createdAt: "2025-04-07T19:30:00.000Z",
  },
  {
    id: "found-008",
    title: "Stray Dog",
    status: "active",
    description: "Medium-sized white dog. No collar. Looks hungry.",
    type: "found",
    category: "pet",
    dateLostFound: "2025-04-06T21:00:00.000Z",
    location: { latitude: 13.9333, longitude: 121.0979, place: "Near Church" },
    createdAt: "2025-04-06T21:30:00.000Z",
  },
  {
    id: "found-009",
    title: "Found Bag of Groceries",
    status: "resolved",
    description: "Plastic bag with canned goods and vegetables.",
    type: "found",
    category: "item",
    dateLostFound: "2025-04-05T11:15:00.000Z",
    location: { latitude: 13.9374, longitude: 121.092, place: "Near Market" },
    createdAt: "2025-04-05T11:30:00.000Z",
  },
  {
    id: "found-010",
    title: "Found Collarless Cat",
    status: "active",
    description: "Orange cat lounging near my gate for 2 days.",
    type: "found",
    category: "pet",
    dateLostFound: "2025-04-04T15:00:00.000Z",
    location: { latitude: 13.9365, longitude: 121.0907, place: "Corner Store" },
    createdAt: "2025-04-04T15:30:00.000Z",
  },
];

const MyReportsSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">My Reports</h2>
      <Input placeholder="Search..." className="mt-2 max-w-[248px]" />
      <Tabs defaultValue="lostReports">
        <TabsList className="grid max-w-2xs w-full grid-cols-2 my-2">
          <TabsTrigger value="lostReports">Lost Reports</TabsTrigger>
          <TabsTrigger value="foundReports">Found Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="lostReports">
          <ReportsGridLayout>
            {lostPosts.map((post) => (
              <MyReportCard post={post} key={post.id} />
            ))}
          </ReportsGridLayout>
        </TabsContent>
        <TabsContent value="foundReports">
          <ReportsGridLayout>
            {foundPosts.map((post) => (
              <MyReportCard post={post} key={post.id} />
            ))}
          </ReportsGridLayout>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyReportsSection;
