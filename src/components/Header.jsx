import '../App.css'
import aaslLogo from '../assets/aasl-logo.png'
import hamburger from '../assets/hamburger.svg'
import { useState } from 'react'
import { Link } from "react-router-dom";


function Header() {

    const [menuIsOpen,setMenuIsOpen] = useState(false)

    const toggleMenu = () => setMenuIsOpen(!menuIsOpen)

    return(
    <div className='header mb-10000'>
        <img src={aaslLogo} className="aasl-logo" alt="AASL logo" />
        <div className='header-text'>
            <h2 className='header-title'>AASL</h2>
        </div>
        <div className='hamburger-icon-div'>
            <button onClick={toggleMenu}>
                <img src={hamburger} className = 'hamburger-icon'/>
            </button>
        </div>
       {menuIsOpen &&
            <div className='hamburger-menu'>
                <ul className='header-menu-items'>
                    <li className='menu-item'><Link to="/">Home</Link></li>
                    <li className='menu-item'><Link to="/stats">Stats</Link></li>
                    <li className='menu-item'><Link to="/mission">Mission</Link></li>
                    <li className='menu-item'><Link to="/contact">Contact</Link></li>
                </ul>            
            </div>
        }
        <ul className='header-nav-items'>
            <li className='nav-item' ><Link to="/">Home</Link></li>
            <li className='nav-item' ><Link to="/stats">Stats</Link></li>
            <li className='nav-item' ><Link to="/mission">Mission</Link></li>
            <li className='nav-item' ><Link to="/contact">Contact</Link></li>
        </ul>

    </div>
    )
}

export default Header;