import Loader from "@/components/shared/Loader";
import { useGetUsers } from "@/lib/react-query/queriesAndMutation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AllUsers = () => {
  const { data: users, fetchNextPage, hasNextPage } = useGetUsers();
  const { ref, inView } = useInView();
  console.log(users);
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);
  console.log(fetchNextPage);
  if (!users) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }
  return (
    <div className="home-container my-10">
      <ul>
        {users?.pages.map((item: any, index: number) => (
          <li className="text-center py-10" key={`page-${index}`}>
            {item?.documents.map((user: any) => (
              <div key={user.$id} className="w-20 h-20 m-auto mt-20 rounded-xl">
                <img src={user.imageUrl} alt="" />
              </div>
            ))}
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <div ref={ref}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default AllUsers;
