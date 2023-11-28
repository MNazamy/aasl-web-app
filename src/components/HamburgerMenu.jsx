import { Link } from "react-router-dom"
 function HamburgerMenu(toggleMenu) {
    return (
        <div className='hamburger-menu'>
            <div className='hamburger-menu-items'>
                <p className='menu-item'><Link to="/" onClick={toggleMenu}>Home</Link></p>
                <p className='menu-item'><Link to="/stats" onClick={toggleMenu}>Stats</Link></p>
                <p className='menu-item'><Link to="/mission" onClick={toggleMenu}>Mission</Link></p>
                <p className='menu-item'><Link to="/contact" onClick={toggleMenu}>Contact</Link></p>
            </div>            
        </div>
    )
}

export default HamburgerMenu