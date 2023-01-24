import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Signup from './Signup';
import Employees from './Employees';
function Navbar() {
  return (
    <nav>
        <Router>
            <ul className='nav'>
            <Link to='employees'>Employees</Link>
            <Link to='about'>About</Link>
            <Link to='services'>Services</Link>
            <Link to='signup'>Sign up</Link>
            </ul>
            <Routes>
                <Route path='employees' element={<Employees />} />
                <Route path='about' element={ <About />}/>
                <Route path='services' element={ <Services />}/>
                <Route path='signup' element={ <Signup />}/>
            </Routes>
        </Router>
    </nav>
  )
}

export default Navbar