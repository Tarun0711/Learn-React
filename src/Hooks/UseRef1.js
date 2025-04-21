import React, { useRef } from 'react'

export default function UseRef1() {
    const divRef=useRef()
    const handelDiv=()=>{
        divRef.current.innerHTML="Hello Welcome"
    }
  return (

    <div ref={divRef}>
            <button onClick={handelDiv}>Show</button>
    </div>
  )
}
