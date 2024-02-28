import { Loader } from "@/components/shared";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutation";

const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();
  console.log(currentUser);
  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className="text-light-4">No liked posts</p>
      )}

      {/* <GridPostList posts={currentUser.liked} showStats={false} /> */}
    </>
  );
};

export default LikedPosts;
