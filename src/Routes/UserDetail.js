import React from 'react'
import { useParams } from "react-router-dom";

export const UserDetail = () => {
    const params = useParams();

  return (
    <div>
      <h1>
        I am {params.idd} 
      </h1>
    </div>
  )
}
