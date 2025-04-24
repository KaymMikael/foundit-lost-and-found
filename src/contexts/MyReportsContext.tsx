import useReports from "@/hooks/useReports";
import useUser from "@/hooks/useUser";
import { UserPost } from "@/types/index.type";
import { createContext, useEffect, useMemo, useState } from "react";

interface MyReportsContextTypes {
  myPosts: UserPost[];
  setMyPosts: React.Dispatch<React.SetStateAction<UserPost[]>>;
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
  const { user } = useUser();
  const { posts, loading } = useReports();
  const [myPosts, setMyPosts] = useState<UserPost[]>([]);
  const reportsCreatedTotal = useMemo(() => myPosts.length, [myPosts]);
  const reunitedResolvedTotal = useMemo(
    () =>
      myPosts.filter(
        (p) => p.post.status === "resolved" || p.post.status === "reunited"
      ).length,
    [myPosts]
  );
  const activeReportsTotal = useMemo(
    () => myPosts.filter((p) => p.post.status === "active").length,
    [myPosts]
  );

  useEffect(() => {
    const filteredPosts = posts.filter((p) => p.user.id === user.id);
    setMyPosts(filteredPosts);
  }, [loading, posts, user]);

  return (
    <MyReportsContext.Provider
      value={{
        myPosts,
        setMyPosts,
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
