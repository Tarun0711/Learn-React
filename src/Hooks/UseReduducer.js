import React from 'react'
import { useReducer } from 'react'
const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="one"){
        return{count:state.count+1}
    }else if(action.type==="Two"){
        return{count:state.count+2}
    }else if(action.type==="Three"){
        return{count:state.count+3}
    }else if(action.type==="Four"){
        return{count:state.count+4}
    }
    return state
}
export const UseReduducer = () => {
    // const[count,setCount]=useState(0)
    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div> 
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"one"})}>Incriment by 1</button>
        <button onClick={()=>dispatch({type:"Two"})}>Incriment by 2</button>
        <button onClick={()=>dispatch({type:"Three"})}>Incriment by 3</button>
        <button onClick={()=>dispatch({type:"Four"})}>Incriment by 4</button>
        <h1>{state.count}</h1>
        
    </div>
  )
}
