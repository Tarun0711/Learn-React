import React, { useState } from "react";

export const Joke = () => {
  const [data, setData] = useState([]);
  const [punchline, setPunchline] = useState([]);
  const [button,setButton]=useState("GenerateJOke");
  
  const fetchData = async () => {
    const data = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const result = await data.json();
    setData(result.setup);
    setPunchline(result.punchline);
    setButton("NextJOke")
  };



  return (

    <div>
      <h1>{data}</h1>
      <h3>{punchline}</h3>
      <button onClick={fetchData}>{button}</button>
    </div>
  );
};
