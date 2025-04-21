import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const[count,setCount]=useState(0);
    const[number,setNumber]=useState(0);
    
    useEffect(()=>{
        console.log(useEffect)
    },[count])
  return (
    <div>
        <h1>{count}</h1><br/><h1>{number}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setNumber(number+1)}>Increment</button>
    </div>
  )
}

export default UseEffectHook

// {/*useEffect renderHook
// allows to hook lifecycle methods in your function base component

// 1 component Did mount()
// 2 component did update()

// allows you to preforme/eliminate side effect on your react application

// syntax{
//     useEffect(()=>{},[dependency array])
// }
