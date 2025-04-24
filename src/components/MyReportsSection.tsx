import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Post } from "@/types/index.type";
import useMyReports from "@/hooks/useMyReports";
import MyReportsGrid from "./MyReportsGrid";

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
          <MyReportsGrid posts={filteredLost} search={search} />
        </TabsContent>
        <TabsContent value="foundReports">
          <MyReportsGrid posts={filteredFound} search={search} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyReportsSection;
