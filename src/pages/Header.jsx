import React from 'react';
import "../styles/Header.css";
import { useState } from 'react';

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
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <button className='btn' onClick={()=>{
                  setlogin("Logout"); console.log("Dyamic Button Now!");
                }}>{loginbtn}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header
