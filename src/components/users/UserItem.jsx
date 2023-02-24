import { Link } from "react-router-dom";
export default function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex flex-row items-center space-x-4 card-body">
        <div className="avatar rounded-full shadow w-14 h-14">
          <img src={avatar_url} alt="Profile" />
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className=" text-xs text-base-content text-opacity-40 "
            to={`user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
