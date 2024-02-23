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
            <>
              {posts?.pages.map((post: any, index: number) => (
                <ul className="flex flex-col flex-1 gap9  w-full " key={index}>
                  {post?.documents.map((post: any) => (
                    <li key={post.$id} className=" justify-center m-5 w-full">
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
    </div>
  );
};

export default Home;
