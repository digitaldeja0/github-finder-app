import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content mx-1uto">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">About</h1>
          <p className="mb-5">
            Welcome to the GitHub User Finder app! This web application is
            designed to help you easily search for and find any user on GitHub.
            This app is perfect for developers, recruiters, or anyone interested
            in exploring the world of GitHub.
          </p>
          <Link to="/">
            <h2 className="btn btn-primary normal-case text-lg my-5">
              Get Started
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
