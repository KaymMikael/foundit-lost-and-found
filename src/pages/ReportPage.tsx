import { Badge } from "@/components/ui/badge";
import useReports from "@/hooks/useReports";
import { Loader } from "lucide-react";
import { format } from "date-fns";
import { useEffect } from "react";
import { useParams } from "react-router";
import ReportNotFound from "@/components/report-not-found";
import PlaceHolder from '@/assets/images/ImagePlaceHolder.jfif'

const ReportPage = () => {
  const { postId } = useParams();
  const { posts, loading } = useReports();
  const userPost = posts.find(({ post }) => post.id === postId);

  useEffect(() => {
    console.log(userPost);
  }, [userPost]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <Loader size={28} className="animate-spin" />
      </div>
    );
  }

  if (!userPost) {
    return <ReportNotFound />;
  }

  return (
    <div className="max-w-7xl 2xl:mx-auto flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Report Details</h2>
      {/* Report badges */}
      <div className="capitalize flex gap-2">
        <Badge variant={"outline"}>{userPost.post.type}</Badge>
        <Badge
          className={`capitalize ${
            userPost.post.status === "active"
              ? "bg-[#0066ff]"
              : userPost.post.status === "reunited"
              ? "bg-[#28a745]"
              : "bg-[#978129]"
          }`}
          variant={"outline"}
        >
          {userPost.post.status}
        </Badge>
        <Badge variant={"outline"}>{userPost.post.category}</Badge>
      </div>
      {/* Report details */}
      <div className="grid gap-2">
        <p className="text-2xl">{userPost.post.title}</p>
        <p>{userPost.post.description}</p>
        <p>Place: {userPost.post.location.place}</p>
        <p>
          Date <span className="capitalize">{userPost.post.type}</span>:{" "}
          {format(userPost.post.dateLostFound, "PPP")}
        </p>
        <p>Date Posted: {format(userPost.post.createdAt, "PPP")}</p>
        <img
          src={PlaceHolder}
          alt=""
          className="rounded-lg object-cover max-w-[350px] max-h-[200px] h-full w-full"
        />
      </div>
    </div>
  );
};

export default ReportPage;
