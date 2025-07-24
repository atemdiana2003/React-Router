import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate ();
  return (
    <div className='navbar'>
        <img src={logo}  width="130px" alt="" />

        <ul>
           <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contacts</li></NavLink>
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
        </ul>
        <button onClick={() => navigate('/contact', {replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar