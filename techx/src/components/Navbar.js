import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Signup from './Signup';

function Navbar() {
  return (
    <nav>
        <Router>
            <ul className='nav'>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='services'>Services</Link>
            <Link to='signup'>Sign up</Link>
            </ul>
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route path='about' element={ <About />}/>
                <Route path='services' element={ <Services />}/>
                <Route path='signup' element={ <Signup />}/>
            </Routes>
        </Router>
    </nav>
  )
}

export default Navbar