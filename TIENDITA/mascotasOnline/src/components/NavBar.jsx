import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';

const NavBar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg myNavbar">
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img src={logo} alt="" className='logoImg'/></NavLink>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">
                        <button className="navButton"></button>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/products">Productos</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/myaccount">Mi cuenta</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">Carrito</NavLink>
                    </li>
                </ul>
                </div>
            </div>
          </nav>  
        </div>
    )
}

export default NavBar;