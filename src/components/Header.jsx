import '../App.css'
import aaslLogo from '../assets/aasl-logo.png'
import hamburger from '../assets/icons/hamburger.svg'
import { Link } from "react-router-dom";

function Header( {toggleMenu} ) {


    return(
    <div className='header mb-10000'>
        <Link to="/">
        <img src={aaslLogo} className="aasl-logo" alt="AASL logo" />
        </Link>
        <div className='header-text'>
            <h3 className='header-title'>Uniting Afghan Americans through sports</h3>
        </div>
        <div className='hamburger-icon-div'>
            <button onClick={toggleMenu}>
                <img src={hamburger} className='hamburger-icon'/>
            </button>
        </div>

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