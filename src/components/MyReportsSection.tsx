import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Post } from "@/types/index.type";
import useMyReports from "@/hooks/useMyReports";
import MyReportsGrid from "./MyReportsGrid";
import useSearch from "@/hooks/useSearch";

const MyReportsSection = () => {
  const { foundPosts, lostPosts } = useMyReports();
  const { searchQuery, setSearchQuery } = useSearch();

  const filterPosts = (posts: Post[]) => {
    const term = searchQuery.toLowerCase();

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
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Tabs defaultValue="lostReports">
        <TabsList className="grid max-w-2xs w-full grid-cols-2 my-2">
          <TabsTrigger value="lostReports">Lost Reports</TabsTrigger>
          <TabsTrigger value="foundReports">Found Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="lostReports">
          <MyReportsGrid posts={filteredLost} search={searchQuery} />
        </TabsContent>
        <TabsContent value="foundReports">
          <MyReportsGrid posts={filteredFound} search={searchQuery} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyReportsSection;
