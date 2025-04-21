import React, { useState } from 'react'

export default function Form() {
    const [inputs,setInputs]=useState({
        name:"",
        email: "",
        password: ""
    })
    const handelChange =(e)=>{
        const {name,value}=e.target
        setInputs({...inputs,[name]: value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("name",inputs.name)
        localStorage.setItem("email",inputs.email)
        localStorage.setItem("password",inputs.password)

        // localStorage.setItem("userInfo",JSON.stringify(inputs))
        // setInputs({
        //     name:"",
        //     email: "",
        //     password:""
        // })
        
    }
    const HandleRemove=(e)=>{
        localStorage.removeItem("userInfo");

    }
  return (
    <div>
        <form>
        <input type="text" value={inputs.name} onChange={handelChange} name='name'/><br/> <br/>
        <input type="email" value={inputs.email} onChange={handelChange} name='email'/><br/> <br/>
        <input type="password" value={inputs.password} onChange={handelChange} name='password'/><br/><br/>
        <input type="submit" onClick={handleSubmit} value="submit" /><br/> <br/>
        </form>
        {localStorage.getItem("name") && (
            <h1>{localStorage.getItem("name")}</h1>
            // <h1>{localStorage.getItem("email")}</h1>
            // <h1>{localStorage.getItem("passowrd")}</h1>

        )}
        <button onClick={HandleRemove}>RemoveItem</button>

    </div>
  )
}
