import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/Blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/User">User</NavLink>
            </li>
        </ul>
    </div>
  )
}
