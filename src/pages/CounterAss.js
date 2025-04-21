import React,{useEffect, useState} from 'react'

export const CounterAss = () => {
    const [counter ,setCounter]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCounter(new Date())
        },1000)
    },[counter])
  return (
    <div>
        <h1>
        {counter.toLocaleString()}
        </h1>
        
    </div>
  )
}
