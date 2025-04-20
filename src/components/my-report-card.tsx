import { formatDistance } from "date-fns";
import { EllipsisVertical } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Post } from "@/types/index.type";

interface MyReportCardProps {
  post: Post;
}

const MyReportCard = ({ post }: MyReportCardProps) => {
  return (
    <Card>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {/* Status */}
              <Badge variant="outline" className="capitalize">
                {post.status}
              </Badge>
              {/* Type */}
              <Badge variant="outline" className="capitalize">
                {post.type}
              </Badge>
            </div>
            <EllipsisVertical
              role="button"
              aria-label="Report card settings"
              className="cursor-pointer"
              size={16}
            />
          </div>
          <img
            src="https://placehold.co/350x200"
            alt=""
            className="rounded-lg w-full"
          />
          {/* Texts */}
          <div className="grid gap-2">
            <p className="font-semibold leading-5">{post.title}</p>
            <p className="text-sm text-gray-400">
              <span className="capitalize">{post.category}</span> &bull;
              <span className="ms-1">
                {`${formatDistance(
                  new Date(post.createdAt),
                  new Date().toISOString()
                )} ago`}
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyReportCard;
