import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
const HUB_URL = import.meta.env.VITE_GH_URL;

export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    user:{},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initalState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const res = await fetch(`${HUB_URL}/search/users?${params}`);
    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser = async (login) => {
    setLoading();
  
    const res = await fetch(`${HUB_URL}/users/${login}`);

    if(res.status ===404){
      window.location="/notfound"
    }else{
      const data = await res.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
   
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const clearUsers = ()=> dispatch({type:"CLEAR_USERS"})

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user:state.user,
        loading: state.loading,
        searchUsers,
        clearUsers, 
        getUser
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
