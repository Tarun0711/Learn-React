import React from "react";

export default function ToDoSideBard(props) {
  return (
    <>
       <div className='nav'>
       <ul className='nav-section'>
         <li onClick={()=>props.change("INBOX")}>
            <h1>INBOX</h1>
         </li>
         <li onClick={()=>props.change("TODAY")}>
            <h1>TODAY</h1>
         </li>
         <li onClick={()=>props.change("NEXT7DAYS")}>
            <h1>NEXT7DAYS</h1>
         </li>
       </ul>
    </div>
    </>
  );
}
