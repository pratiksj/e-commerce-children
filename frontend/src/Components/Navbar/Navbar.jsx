
import './Navbar.css'
import logo from '../assets/logo.jpeg'
import cart from '../assets/cart.png'
import {useState} from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
const [menu,setMenu]= useState('shop')

  return (
    <div className='navbar'>
<div className="nav-logo">
    <img className='logo' src={logo} alt=''/>
    
</div>
<ul className="nav-menu">
<li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
<li onClick={()=>{setMenu('men')}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==='men'?<hr/>:<></>}</li>
<li onClick={()=>{setMenu('women')}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==='women'?<hr/>:<></>}</li>
</ul>

<div className="nav-login-cart">
    <Link to='/login'><button>login</button></Link>
    <Link to='/cart'> <img className='logo' src={cart} alt=''/></Link>
    
   
    <div className="nav-cart-count">0</div>
</div>

    </div>
  )
}
