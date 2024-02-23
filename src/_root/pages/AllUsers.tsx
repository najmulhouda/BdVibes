import { Loader, UserCard } from "@/components/shared";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AllUsers = () => {
  const { toast } = useToast();
  const { ref, inView } = useInView();
  const {
    data: users,
    isPending,
    isError: isErrorCreators,
    hasNextPage,
    fetchNextPage,
  } = useGetUsers();

  // console.log(users);
  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isPending && !users ? (
          <Loader />
        ) : (
          <>
            {users?.pages.map((user: any, index: number) => (
              <ul className="user-grid" key={`user-${index}`}>
                {user?.documents.map((user: any) => (
                  <li
                    key={`user-${user.$id}`}
                    className="flex-1 min-w-[200px] w-full  "
                  >
                    <UserCard user={user} />
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
  );
};

export default AllUsers;
