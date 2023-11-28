import './App.css'
import Header from './components/Header'
import HamburgerMenu  from './components/HamburgerMenu'

import Home from './components/pages/Home'
import Mission from './components/pages/Mission'
import Stats from './components/pages/Stats'
import Contact from './components/pages/Contact'
import { useState } from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [menuIsOpen,setMenuIsOpen] = useState(false)
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <div className="content-box">
        <Routes>
          <Route path = "/stats" element={<Stats/>} />
          <Route path = "/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      {menuIsOpen && <HamburgerMenu toggleMenu={toggleMenu}/>}


    </>
  )
}

export default App
