import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyReportCard from "@/components/my-report-card";
import { Input } from "@/components/ui/input";
import ReportsGridLayout from "./reports-grid-layout";
import { useState } from "react";
import { Post } from "@/types/index.type";
import useMyReports from "@/hooks/useMyReports";

const MyReportsSection = () => {
  const { foundPosts, lostPosts } = useMyReports();
  const [search, setSearch] = useState("");

  const filterPosts = (posts: Post[]) => {
    const term = search.toLowerCase();

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term) ||
        post.location.place.toLowerCase().includes(term)
    );
  };

  const filteredLost = filterPosts(lostPosts);
  const filteredFound = filterPosts(foundPosts);

  return (
    <div>
      <h2 className="text-2xl font-semibold">My Reports</h2>
      <Input
        placeholder="Search..."
        className="mt-2 max-w-[248px]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Tabs defaultValue="lostReports">
        <TabsList className="grid max-w-2xs w-full grid-cols-2 my-2">
          <TabsTrigger value="lostReports">Lost Reports</TabsTrigger>
          <TabsTrigger value="foundReports">Found Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="lostReports">
          <ReportsGridLayout>
            {filteredLost.length ? (
              filteredLost.map((post) => (
                <MyReportCard post={post} key={post.id} />
              ))
            ) : (
              <p className="mt-2 text-gray-400">You don't have any reports</p>
            )}
          </ReportsGridLayout>
        </TabsContent>
        <TabsContent value="foundReports">
          <ReportsGridLayout>
            {filteredFound.length ? (
              filteredFound.map((post) => (
                <MyReportCard post={post} key={post.id} />
              ))
            ) : (
              <p className="mt-2 text-gray-400">You don't have any reports</p>
            )}
          </ReportsGridLayout>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyReportsSection;
