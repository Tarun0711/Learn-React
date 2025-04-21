import React from 'react'
import { useAuth } from '../Provider/AuthContext'

export default function ContextAccess() {
    const {isLoggedIn,handleLogin,handleLogout}=useAuth()
  return (
    <div>
        {isLoggedIn?(<>
        <p>You are Logged in</p>
        <button onClick={()=>handleLogout()}>Logout</button>
        </>):(<>
        <p>You are not logged in</p>
        <button onClick={()=>handleLogin("Tarun")}>Logout</button>
        </>)}
    </div>
  )
}
