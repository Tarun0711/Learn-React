import React, { useState } from 'react'
import './App.css'

function Form() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [condition,setCondition]=useState(true)
    
   const handelSubmit=(e)=>{
    e.preventDefault();
    setCondition(false)

   }
  return (
    <div id='main'>
        <form onSubmit={handelSubmit}>
            <input type="email" placeholder='Enter your email here..'  value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <input type="password" placeholder='Enter your Password here..' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <input type="submit" value="submit"/>
        </form> 
         {!condition &&(
            <>
            <h1>Your email is :{email}</h1>
            <h1>Your password is :{password}</h1>
            </>
            
         )}  
        
    </div>
  )
}

export default Form