import React, { useState } from 'react'; 
import './navbar.css'; 
import logo from '../../Assets/logo circle crop.png';  
import contactImg from '../../Assets/contact.png'; 
import { Link } from 'react-scroll';
import menu from '../../Assets/menu.png'; 


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='background' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Us</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">Services Offered</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link>

            </div>
            <button className="desktopMenuBtn" onClick={() => {
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); 
            }}>
              <img src={contactImg} alt="" className='contactImg' />Contact Us</button>
            
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='background' spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>About Us</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-75} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Services Offered</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Contact</Link>
                
            </div>

        </nav>
  )
}

export default Navbar
