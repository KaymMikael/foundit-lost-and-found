import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { UserPost } from "@/types/index.type";
import MyReportsGrid from "./MyReportsGrid";
import useSearch from "@/hooks/useSearch";
import useReports from "@/hooks/useReports";
import useUser from "@/hooks/useUser";

const MyReportsSection = () => {
  const { user: userData } = useUser();
  const { posts } = useReports();
  const { searchQuery, setSearchQuery } = useSearch();

  const filterPosts = (userPost: UserPost[]) => {
    const term = searchQuery.toLowerCase();

    return userPost.filter(
      (user) =>
        user.post.title.toLowerCase().includes(term) ||
        user.post.description.toLowerCase().includes(term) ||
        (user.post.location.place.toLowerCase().includes(term) &&
          user.user.id === userData.id)
    );
  };

  const lostReports = filterPosts(
    posts.filter((post) => post.post.type === "lost")
  );
  const foundReports = filterPosts(
    posts.filter((post) => post.post.type === "found")
  );

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
          <MyReportsGrid posts={lostReports} search={searchQuery} />
        </TabsContent>
        <TabsContent value="foundReports">
          <MyReportsGrid posts={foundReports} search={searchQuery} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyReportsSection;
