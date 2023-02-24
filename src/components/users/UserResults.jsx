import { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
export default function UserResults() {
  const { users, loading, searchhUsers } = useContext(GithubContext);
//   useEffect(() => {
//     searchUsers();
//   }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  ">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="w-100 mt-20 mx-auto h-full">
        <h3 className="text-xl"> Content Loading...</h3>
      </div>
    );
  }
}
