import { createContext, useState } from "react";

const GithubContext = createContext()
const HUB_URL = import.meta.env.VITE_GH_URL

export const GithubProvider =({children})=>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fecthUsers = async () => {
        const res = await fetch(`${HUB_URL}/users`);
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      };

      return <GithubContext.Provider
      value={{
        users,
        loading, 
        fecthUsers
      }}
      >
        {children}
      </GithubContext.Provider>

}

export default GithubContext