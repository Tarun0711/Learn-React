import React, { useState } from 'react'

export default function ErrorBoundary1() {
    const [count, setCount]=useState(0);
    if(count===15){
      throw new Error("error is here");
    }
  return (
    <>
    <h1>count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  )
}
