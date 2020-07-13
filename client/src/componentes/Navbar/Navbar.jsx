import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function NavBar(){
    return(
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link exact to ="/">Home</Link>
                        <Link to="/productos">Productos</Link>
                        <Link to="/crud">Crud</Link>
                        <Link to="/cart">Carrito</Link>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
            
    )
}

