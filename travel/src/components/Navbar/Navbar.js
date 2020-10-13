import React from 'react';
import './Navbar.scss';
import logo from '../../images/Logo.png'

 function Navbar() {
    return (
        <nav className="navbar"> 
            <img src={logo} alt="logo" className="nav-image"/> 
           
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link active" > Home </a>
                </li>
                <li>
                    <a href="/Destination" className="nav-link active"> Places </a>
                </li>
                <li>
                    <a href="/Contact" className="nav-link active"> Contact </a>
                </li>
                <li>
                    <a href="/Login" className="nav-link active"> Login </a>
                </li>
            </ul>
        </nav>
    );
}
 export default Navbar;