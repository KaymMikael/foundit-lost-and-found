import { EllipsisVertical, Eye, MessageCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { UserPost } from "@/types/index.type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { getDistance } from "@/utils/date";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PostReportCardProps {
  userPost: UserPost;
}

const PostReportCard = ({ userPost }: PostReportCardProps) => {
  const { post, user } = userPost;

  const handleMessageClick = (email: string) => {
    console.log(email);
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
                <DropdownMenuItem>
                  <Eye />
                  View
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleMessageClick(user.email)}
                >
                  <MessageCircle />
                  Message
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <img
            src="https://placehold.co/350x200"
            alt=""
            className="rounded-lg w-full object-cover"
          />
          {/* Texts */}
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Me</AvatarFallback>
            </Avatar>
            <div className="grid gap-2 flex-1">
              <p className="font-semibold leading-5">{post.title}</p>
              <p className="text-sm text-gray-400">
                <span className="capitalize">{post.category}</span> &bull;
                <span className="ms-1">
                  {`${getDistance(post.createdAt, new Date())} ago`}
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostReportCard;
