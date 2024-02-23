import { PostCard, UserCard } from "@/components/shared";
import Loader from "@/components/shared/Loader";
import { useGetPosts, useGetUsers } from "@/lib/react-query/queriesAndMutation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView();

  const {
    data: posts,
    isPending: isPostLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetPosts();

  const {
    data: creators,
    isLoading: isUserLoading,
    // isError: isErrorCreators,
  } = useGetUsers();
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <>
              {posts?.pages.map((post: any, index: number) => (
                <ul className="flex flex-col flex-1 gap-9  w-full " key={index}>
                  {post?.documents.map((post: any) => (
                    <li key={post.$id} className=" justify-center  w-full">
                      <PostCard post={post} key={post.$id} />
                    </li>
                  ))}
                </ul>
              ))}
            </>
          )}
        </div>

        {hasNextPage && (
          <div className="mt-10" ref={ref}>
            <Loader />
          </div>
        )}
      </div>
      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <>
            <ul className="grid 2xl:grid-cols-2 gap-6 w-full">
              {creators?.pages[0]?.documents.map((creator) => (
                <li key={creator?.$id}>
                  <UserCard user={creator} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
