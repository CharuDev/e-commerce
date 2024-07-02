import React, { useState } from 'react'
import "../Navbar/Navbar.css"
import logo from "../Assets/Assets/logo.png";
import card_icon from "../Assets/Assets/cart_icon.png"
import { Link } from 'react-router-dom';
function Navbar() {
    const [menu,setmenu] = useState("Shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("Shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu ==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration:"none"}} to="/mens">Men</Link>{menu ==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration:"none"}} to="/womens">Women</Link>{menu ==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Kids")}}><Link style={{textDecoration:"none"}} to="/Kids">Kids</Link>{menu ==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-card'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={card_icon} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
        </div>
  )
}

export default Navbar