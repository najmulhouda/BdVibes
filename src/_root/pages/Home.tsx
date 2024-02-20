import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import {
  useGetPosts,
  useGetRecentPosts,
} from "@/lib/react-query/queriesAndMutation";
import { Models } from "appwrite";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView();

  const { fetchNextPage, hasNextPage } = useGetPosts();
  // const [searchValue, setSearchValue] = useState("");

  // const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  const { data: posts, isPending: isPostLoading } = useGetRecentPosts();
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col  flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard key={post.caption} post={post} />
                // <li key={post.$id}>{post.title}</li>
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
