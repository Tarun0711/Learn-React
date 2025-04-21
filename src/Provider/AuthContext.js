import React, { Children, createContext, useContext, useState } from 'react'
const Authcontext =createContext();
export default function AuthContext() {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const handleLogin=(token)=>{
        localStorage.setItem("token",token)
        setIsLoggedIn(true)
    }
    const  handleLogout=()=>{
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }
  return (
    <div>
             <Authcontext.Provider value={{isLoggedIn,handleLogin,handleLogout}}>
                {Children}
             </Authcontext.Provider>
    </div>
  )
}

export const useAuth=()=>{
    return useContext(Authcontext)
}