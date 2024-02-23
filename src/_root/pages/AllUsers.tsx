import { Loader, UserCard } from "@/components/shared";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutation";

const AllUsers = () => {
  const { toast } = useToast();

  const { data: users, isLoading, isError: isErrorCreators } = useGetUsers();

  console.log(users);
  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading && !users ? (
          <Loader />
        ) : (
          <>
            {users?.pages.map((user: any, index: number) => (
              <ul className="user-grid">
                {user?.documents.map((user: any) => (
                  <li
                    key={`page-${index}`}
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
    </div>
  );
};

export default AllUsers;

// export const useGetUsers = (limit?: number) => {
//   return useQuery({
//     queryKey: [QUERY_KEYS.GET_USERS],
//     queryFn: () => getUsers(limit),
//   });
// };
