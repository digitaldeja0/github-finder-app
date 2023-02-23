import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero h-full">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-8">Opps!</h1>
          <p>404 - Page Not Found</p>
          <Link to="/">
            <h2 className="btn btn-primary normal-case text-lg my-5">
              Return Home <FaHome className="mx-2" />
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
