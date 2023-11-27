import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Mission from './components/Mission'
import Stats from './components/Stats'
import Contact from './components/Contact'
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [menuIsOpen,setMenuIsOpen] = useState(false)
  const toggleMenu = () => {console.log("hi"); setMenuIsOpen(!menuIsOpen)}

  return (
    <>
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} toggleMenu={toggleMenu} />
      <div className="content-box">
        <Routes>
          <Route path = "/stats" element={<Stats/>} />
          <Route path = "/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      {menuIsOpen &&
            <div className='hamburger-menu'>
                <ul className='hamburger-menu-items'>
                    <li className='menu-item'><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li className='menu-item'><Link to="/stats" onClick={toggleMenu}>Stats</Link></li>
                    <li className='menu-item'><Link to="/mission" onClick={toggleMenu}>Mission</Link></li>
                    <li className='menu-item'><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>            
            </div>
        }


    </>
  )
}

export default App
