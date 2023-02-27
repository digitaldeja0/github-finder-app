import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { AlertContext } from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";
function UsersSearch() {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
        setAlert("please enter a search query", "error")
    } else {
      dispatch ({type:"SET_LOADING"})

     const users = await searchUsers(text)
     dispatch ({type:"GET_USERS", payload: users})
      setText("");
    }
  };

  const handleClear =(e)=>{
    e.preventDefault();
    if(users.length>0){
      dispatch({type:"CLEAR_USERS"})
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
