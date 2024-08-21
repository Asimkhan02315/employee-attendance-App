import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Table">Table</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Login">Login</Link>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  )
}

export default Navbar