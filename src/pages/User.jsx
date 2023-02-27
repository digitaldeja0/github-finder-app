import React from "react";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { FaStore, FaUserFriends, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import RepoList from "../components/repos/RepoList";
import {
  getUser,
  getUsersRepos,
} from "../context/github/GithubActions";

export default function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    // getUser(params.login);
    // getUsersRepos(params.login);

    const getUserData = async () => {
      const userData = await getUser(params.login);
      dispatch({
        type: "GET_USER",
        payload: userData,
      });

      const userRepoData = await getUsersRepos(params.login);
      dispatch({
        type: "GET_REPOS",
        payload: userRepoData,
      });
    };
    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return (
      <div className="w-100 mt-20 mx-auto h-full">
        <h3 className="text-xl"> Content Loading...</h3>
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full mx-auto lg:w-10/12"></div>
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to Seach
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="card max-w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={avatar_url} alt="Shoes" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title mb-0">{name}</h2>
              <p className="mb-0">{login}</p>
            </div>
          </div>
          <div className="col-grid-2">
            <div className="mb-6">
              <h1 className="text-2xl card-title my-5">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                <div className="ml-2 mr-1 badge badge-info">
                  {hireable && <div className="mx-1">Hireable</div>}
                </div>
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-action my-2">
                <a
                  className="btn btn-sm btn-outline"
                  href={html_url}
                  target="blank"
                  rel="noreferrer"
                >
                  Visit Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md my-2">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg state-value">{location}</div>
                </div>
              )}

              {blog && (
                <div className="stat my-2">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a href={blog} target="blank" rel="noreferrer">
                      Blog Site
                    </a>
                  </div>
                </div>
              )}

              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="blank"
                      rel="noreferrer"
                    >
                      View Twitter
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className=" py-5 mb-6 rounded-lg shadow-md bg-base-100sm:grid-cols-1 md:stats ">
              <div className="stat">
                <div className="stat-figure text-primary"></div>
                <div className="stat-title">Followers</div>
                <div className="stat-value text-primary">{followers}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Following</div>
                <div className="stat-value text-secondary">{following}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Public Repos</div>
                <div className="stat-value text-secondary">{public_repos}</div>
              </div>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </>
    );
  }
}
