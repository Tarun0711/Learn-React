import React from 'react'
import { useParams } from 'react-router-dom'

export const PhoneNumber = () => {
    const params=useParams()
    console.log(params)
  return (
    <div>
        <h1>I am {useParams.id} my phone no is {useParams.number}</h1>
    </div>
  )
}
