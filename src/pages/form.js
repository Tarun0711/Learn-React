import React, { useState } from "react";
import "../pages/App.css";

function Form() {
  // const [name,setName] =useState("")
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [condition, setCondition] = useState(true);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    setCondition(false);
  };
  return (
    <div id="main">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={input.name}
          onChange={(e) => {
            setInput((prev)=>({...prev,name:e.target.value}))
          }}
        ></input>

        <input
          type="email"
          placeholder="Enter your email here.."
          value={input.email}
          onChange={(e) => {
            setInput((prev)=>({...prev,email:e.target.value}))
          }}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your Password here.."
          value={input.password}
          onChange={(e) => {
            setInput((prev)=>({...prev,password:e.target.value}))
          }}
        />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
      {!condition && (
        <>
          <h1>Your name is:{input.name}</h1>
          <h1>Your email is :{input.email}</h1>
          <h1>Your password is :{input.password}</h1>
        </>
      )}
    </div>
  );
}

export default Form;
