import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

const NavBar = () => {
  return (
    <div>
        <ul>
            <li> <Link to={"/"} >Comment List</Link></li>
            <li> <Link to={"/posts"} >Post List</Link></li>
            <li> <Link to={"/users"} >Users List</Link></li>
        </ul>
    </div>
  )
}

export default NavBar