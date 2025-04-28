import EditReportForm from "@/components/edit-report-form";
import ReportNotFound from "@/components/report-not-found";
import useReports from "@/hooks/useReports";
import { UserPost } from "@/types/index.type";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const EditReportPage = () => {
  const { postId } = useParams();
  const { posts } = useReports();
  const [userPost, setUserPost] = useState<UserPost | undefined>();

  useEffect(() => {
    const foundPost = posts.find((p) => p.post.id === postId);
    setUserPost(foundPost);
  }, [postId, posts]);

  if (!userPost) {
    return <ReportNotFound />;
  }

  return (
    <div className="max-w-7xl 2xl:mx-auto flex flex-col gap-4">
      <EditReportForm userPost={userPost}/>
    </div>
  );
};

export default EditReportPage;
