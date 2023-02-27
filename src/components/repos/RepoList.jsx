import RepoItem from "./RepoItem"
export default function RepoList({repos}) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100 flex flex-col ">
        <div className="card-body ">
            <h2 className="text-lg my-4 font-bold card-title">
               Most Recent Repositories
            </h2>
            {repos.map((repo)=>(
                <RepoItem key={repo.id} repo={repo}/>
                ))}
        </div>
    </div>
  )
}
