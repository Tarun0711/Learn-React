import React from 'react'
import { useReducer } from 'react';
const initialState = {
    color: "black" 
  };
  
const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="Red"){
        return{color:state.color="Red"}
    }else if(action.type==="Blue"){
        return{color:state.color="Blue"}
    }else if(action.type==="Green"){
        return{color:state.color="Green"}
    }else if(action.type==="Yellow"){
        return{color:state.color="Yellow"}
    }
    return state
}

const reducer1=(state1,action)=>{
    switch(action.type){
        case "Red1":
            return{color1:action.payload}
            default:
                return state1
    }
}


export const ColorChangeUsingReducer = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const [state1,dispatch1]=useReducer(reducer1,initialState)

  return (
    <div>
        <div style={{backgroundColor:state.color,border:"2px solid red",height:"300px",width:"300px"}}></div>
        <button onClick={()=>dispatch({type:"Red"})}>Red</button>
        <button onClick={()=>dispatch({type:"Blue"})}>Blue</button>
        <button onClick={()=>dispatch({type:"Green"})}>Green</button>
        <button onClick={()=>dispatch({type:"Yellow"})}>Yellow</button>
    
    {/* other type */}
    <div style={{backgroundColor:state1.color1,border:"2px solid red",height:"300px",width:"300px"}}></div>
        <button onClick={()=>dispatch1({type:"Red1",payload:"Red"})}>Red</button>
        <button onClick={()=>dispatch1({type:"Red1",payload:"Blue"})}>Blue</button>
        <button onClick={()=>dispatch1({type:"Red1",payload:"Green"})}>Green</button>
        <button onClick={()=>dispatch1({type:"Red1",payload:"Yellow"})}>Yellow</button>
    
    </div>
  )
}
