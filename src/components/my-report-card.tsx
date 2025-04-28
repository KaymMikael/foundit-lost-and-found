import {
  CheckCircle,
  CheckSquare,
  EllipsisVertical,
  Eye,
  Smile,
  SquarePen,
  Trash,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Post } from "@/types/index.type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { getDistance } from "@/utils/date";
import { useNavigate } from "react-router";
import useReports from "@/hooks/useReports";
import { toast } from "sonner";
import PlaceHolder from "@/assets/images/ImagePlaceHolder.jfif";

interface MyReportCardProps {
  post: Post;
}

const MyReportCard = ({ post }: MyReportCardProps) => {
  const { posts, setPosts } = useReports();
  const navigate = useNavigate();

  const handleViewClick = (postId: string) => {
    navigate(`/report/${postId}`);
  };

  const handleDeleteClick = (postId: string) => {
    const filteredPost = posts.filter((p) => p.post.id !== postId);
    setPosts(filteredPost);
    toast.success("Report Deleted", {
      description: "The report has been successfully removed.",
    });
  };

  const handleEditClick = (postId: string) => {
    navigate(`/edit-report/${postId}`);
  };

  const handleStatusUpdate = (postId: string, newStatus: string) => {
    // Update the specific post's status
    const updatedPosts = posts.map((p) =>
      p.post.id === postId
        ? {
            ...p,
            post: {
              ...p.post,
              status: newStatus as "active" | "reunited" | "resolved",
            },
          }
        : p
    );

    // Update the state with the new posts array
    setPosts(updatedPosts);

    // Display a success message
    toast.success("Status Updated", {
      description: `The status has been successfully updated to "${newStatus}".`,
    });
  };

  return (
    <Card>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {/* Status */}
              <Badge
                variant="outline"
                className={`capitalize ${
                  post.status === "active"
                    ? "bg-[#0066ff]"
                    : post.status === "reunited"
                    ? "bg-[#28a745]"
                    : "bg-[#978129]"
                }`}
              >
                {post.status}
              </Badge>
              {/* Type */}
              <Badge variant="outline" className="capitalize">
                {post.type}
              </Badge>
            </div>
            {/* Report settings dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical
                  role="button"
                  aria-label="Report card settings"
                  className="cursor-pointer"
                  size={16}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Report Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleEditClick(post.id)}>
                  <SquarePen />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleViewClick(post.id)}>
                  <Eye />
                  View
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => handleDeleteClick(post.id)}
                >
                  <Trash />
                  Delete
                </DropdownMenuItem>
                <DropdownMenuLabel>Mark as</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => handleStatusUpdate(post.id, "active")}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Active
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    handleStatusUpdate(
                      post.id,
                      post.category === "item" ? "resolved" : "reunited"
                    )
                  }
                >
                  {post.category === "item" ? (
                    <>
                      <CheckSquare className="mr-2 h-4 w-4" />
                      Resolved
                    </>
                  ) : (
                    <>
                      <Smile className="mr-2 h-4 w-4" />
                      Reunited
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <img
            src={PlaceHolder}
            alt=""
            className="rounded-lg w-full object-cover"
          />
          {/* Texts */}
          <div className="grid gap-2">
            <p className="font-semibold leading-5">{post.title}</p>
            <p className="text-sm text-gray-400">
              <span className="capitalize">{post.category}</span> &bull;
              <span className="ms-1">
                {`${getDistance(post.createdAt, new Date())} ago`}
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyReportCard;
