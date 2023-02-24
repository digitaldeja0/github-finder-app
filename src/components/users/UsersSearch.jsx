import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { AlertContext } from "../../context/alert/AlertContext";
function UsersSearch() {
  const [text, setText] = useState("");

  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
        setAlert("please enter a search query", "error")
    } else {
      searchUsers(text)
      setText("");
    }
  };

  const handleClear =(e)=>{
    e.preventDefault();
    if(users.length>0){
        clearUsers()
    }

  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input "
                placeholder="search"
                value={text}
                onChange={handleChange}
              />

              <button
                className="absolute top-0 right-0 rounded-l-none w-20 btn "
                type="submit"
              >
                go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost">Clear</button>
        </div>
      )}
    </div>
  );
}

export default UsersSearch;
