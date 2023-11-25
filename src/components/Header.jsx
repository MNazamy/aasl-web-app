import '../App.css'
import aaslLogo from '../assets/aasl-logo.png'
import hamburger from '../assets/hamburger.svg'
import { useState, useEffect } from 'react'


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
                    <li className='menu-item'><a href="http://127.0.0.1:5173/">Home</a></li>
                    <li className='menu-item'><a href="http://127.0.0.1:5173/">Stats</a></li>
                    <li className='menu-item'><a href="http://127.0.0.1:5173/">Mission</a></li>
                    <li className='menu-item'><a href="http://127.0.0.1:5173/">Contact</a></li>
                </ul>            
            </div>
        }
        <ul className='header-nav-items'>
            <li className='nav-item' ><a href="http://127.0.0.1:5173/">Home</a></li>
            <li className='nav-item' ><a href="http://127.0.0.1:5173/">Stats</a></li>
            <li className='nav-item' ><a href="http://127.0.0.1:5173/">Mission</a></li>
            <li className='nav-item' ><a href="http://127.0.0.1:5173/">Contact</a></li>
        </ul>

    </div>
    )
}

export default Header;