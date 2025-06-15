import React from 'react';
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img className='logo-img' src="https://cdn.dribbble.com/userupload/16229601/file/original-6b1a728052819b02f17b15b275d9e233.jpg?resize=400x0" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
