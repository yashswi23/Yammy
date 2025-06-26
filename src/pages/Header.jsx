import React from 'react';
import "../styles/Header.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  let btnn="login";
  
   const [loginbtn,setlogin]= useState("login");
  
  return (
   
    <div className="header">
        <div className="logo">
            <img className='logo-img' src="https://cdn.dribbble.com/userupload/16229601/file/original-6b1a728052819b02f17b15b275d9e233.jpg?resize=400x0" />
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <button className='btn' onClick={()=>{
                  setlogin("Logout"); console.log("Dyamic Button Now!");
                }}><Link to="/login">{loginbtn}</Link></button>
            </ul>
        </div>
    </div>
  )
}

export default Header
