import React,{useState} from "react";
import './App.css'
function Assesment() {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  console.log(input)
  return (
    <div>
        <form>
      <input
        type="text"
        value={input.name}
        onChange={(e) => {
          setInput((prev) => ({ ...prev,name: e.target.value }));
        }}
      /><br/>
      <input
      type="text"
      value={input.email}
      onChange={(e) => {
        setInput((prev) => ({ ...prev,email: e.target.value }));
      }}
      
    />
    <h1>your name is :{input.name}</h1><br/>

    <h1>your name is :{input.email}</h1>
</form>
    </div>
  );
}

export default Assesment;
