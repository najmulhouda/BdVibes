import { PostCard } from "@/components/shared";
import Loader from "@/components/shared/Loader";
import { useGetPosts } from "@/lib/react-query/queriesAndMutation";
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
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.pages.map((post: any, index: number) => (
                <li key={`page-${index}`}>
                  {post?.documents.map((post: any) => (
                    <PostCard post={post} />
                  ))}
                </li>
              ))}
            </ul>
          )}
        </div>

        {hasNextPage && (
          <div className="mt-10" ref={ref}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
