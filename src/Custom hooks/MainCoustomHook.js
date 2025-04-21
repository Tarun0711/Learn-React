import React from 'react'
import useCounter from './useCounter'

export default function MainCoustomHook() {
    const {count,increment,decrement}=useCounter()
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>increment()}>increment</button>
        <button onClick={()=>decrement()}>dncrement</button>
    </div>
  )
}
