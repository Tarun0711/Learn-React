import React, { useCallback, useState } from 'react'
let x = new Set()
export default function CallBack() {
  const [count,setCount] = useState(0);
  const [number,setNumber] = useState(1000);
  const handleIncrement=useCallback(()=>{
    setCount(count+1)
  },[count])
  const handleDecrement=useCallback(()=>{
    setCount(count-1)
  },[count])
  const handleIncrementNumber=useCallback(()=>{
    setNumber(number+1)
  },[number])
  const handleDecrementNumber=useCallback(()=>{
    setNumber(number-1)
  },[number])
  x.add(handleDecrement)
  x.add(handleIncrement)
  x.add(handleDecrementNumber)
  x.add(handleIncrementNumber)
  alert(x.size)
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>Increment Count</button>
      <button onClick={handleDecrement}>Increment Count</button>
      <h1>Number: {number}</h1>
      <button onClick={handleIncrementNumber}>Increment Number</button>
      <button onClick={handleDecrementNumber}>Increment Number</button>
    </div>
  )
}