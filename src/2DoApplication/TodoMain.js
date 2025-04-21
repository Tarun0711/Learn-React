import React, { useState } from 'react'
import "./ToDo.css"
import Mainsection from './TodoComponents/Mainsection'
import ToDoSideBard from './TodoComponents/ToDoSideBard'
export default function App() {
  const [active,setActive] =useState("INBOX")
  return (
    <div className='container'>
      <h1>Todo Application</h1>
      <div className="row">
         <div className='item  item1'>
           <ToDoSideBard change={setActive}/>
         </div>
         <div className="item item2">
            <Mainsection active={active}/>
         </div>
      </div>
    </div>
  )
}