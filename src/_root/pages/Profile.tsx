import { useGetUserById } from "@/lib/react-query/queriesAndMutation";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { data: currentUser } = useGetUserById(id || "");
  console.log(currentUser);
  return (
    <div className="profile-container">
      <div className="profile-inner_container ">{currentUser?.name}</div>
    </div>
  );
};

export default Profile;
