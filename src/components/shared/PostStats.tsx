import { useUserContext } from "@/context/AuthContext";
import {
  useDeleteSavedPosts,
  useLikePosts,
  useSavePosts,
} from "@/lib/react-query/queriesAndMutation";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";

import { useState } from "react";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};
const PostStats = ({ post, userId }: PostStatsProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id);
  const [likes, setLikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);

  const { mutate: likePost } = useLikePosts();
  const { mutate: savePost } = useSavePosts();
  const { mutate: deleteSavedPost } = useDeleteSavedPosts();

  const { data: currentUser } = useUserContext();

  const handleLikePost = () => {};
  const handleSavePost = () => {};

  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={`${
            checkIsLiked(likes, userId)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }`}
          alt="like"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => {}}
        />
        <p className="small-medium lg:base-medium">0</p>
      </div>
      <div className="flex gap-2 ">
        <img
          src="/assets/icons/save.svg"
          alt="like"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default PostStats;
