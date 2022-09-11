import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

function Navbar() {
  return (
    <nav>
        <Router>
            <ul className='nav'>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            </ul>
            <Routes>
                <Route path='about' element={ <About />}/>
                <Route path='/' element={ <Home />}/>
            </Routes>
        </Router>
    </nav>
  )
}

export default Navbar