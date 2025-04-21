import React, { useMemo } from 'react'
import { useState } from 'react'

export default function UseMemo() {
  const [count,setCount] = useState(0)
  const [number,setNumber] = useState(1000)
  const isEven = useMemo(()=>{
    let i =0;
    while(i<2000000000) i++;
    return count %2 === 0;
  },[count])
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>{isEven?"EVEN":"ODD"}</h1>
        
        <h1>Number:{number}</h1>
        <button onClick={()=>setNumber(number-1)}>Decrement</button>
    </div>
  )
}

