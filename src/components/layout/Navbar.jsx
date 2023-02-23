import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between mb-10">
      <div>
        <FaGithub />
        <Link to="/">
          <h2 className="btn btn-ghost normal-case text-lg">Github Finder</h2>
        </Link>
      </div>
      <div>
        <Link to="/">
        <h2 className="btn btn-ghost normal-case text-lg">Home</h2>
        </Link>
        <Link to="/about">
        <h2 className="btn btn-ghost normal-case text-lg">About</h2>
        </Link>
      </div>
    </div>
  );
}
