import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Mission from './components/Mission'
import Stats from './components/Stats'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path = "/stats" element={<Stats/>} />
        <Route path = "/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
