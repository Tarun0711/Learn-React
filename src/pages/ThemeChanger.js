import React, { useContext } from 'react'
import "../App.css"
import { userContext } from '../ContextApi/UserProvider';
export default function ThemeChanger() {
    const [text, setText] = React.useState("Dark");
    const [theme,setTheme] = React.useState("active");
    const{user,setUser}= useContext(userContext)
    const handleClass = ()=>{
        if(text === "Dark"){
            setText("Light");
            setTheme("non-active")
        } else{
            setText("Dark");
            setTheme("active")
        }
    }
  return (
    <div className={theme}>
        <h1>I am {user}</h1>
        <button onClick={()=>{handleClass()}}>Inner {text}</button>
    </div>
  )
}


// here i'm using the context api