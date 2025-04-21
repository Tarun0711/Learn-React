import React from 'react'
import { Link } from 'react-router-dom'
import "../Movie.css"
export default function Navbar() {
  return (
    <div className='Navbar'>
        <h1>Tarun MUBI</h1>
        <ul className='nav-links'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Movie</Link>
            </li>
            <li>
                <Link to="/">TV Shows</Link>
            </li>
            <li>
                <Link to="/">Movie Library</Link>
            </li>
            <li>
                <Link to="/">TV library</Link>
            </li>
        </ul>
    </div>
  )
}
