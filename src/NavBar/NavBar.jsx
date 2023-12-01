import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../index.css"

const NavBar = () => {
  return (
    <div>
        <ul>
            <li> <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to={"/"} >Comment List</NavLink></li>
            <li> <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to={"/posts"} >Post List</NavLink></li>
            <li> <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to={"/users"} >Users List</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar