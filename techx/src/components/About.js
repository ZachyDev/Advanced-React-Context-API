import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
function About() {
  const [show,setShow] = useState(true);

  const closeAlert = () => {
    setShow(false);
  }

  const showAlert = () => {
    setShow(true);
  }
  return (
    <div>
        <h1>About Us</h1>
        {/* alert */}
        
        {show ? (<Alert variant='success' onClose={closeAlert} dismissible>
          <Alert.Heading>Important</Alert.Heading>
          <p>Welcome to TechX Global</p>
        </Alert>) : (<Button variant='success' onClick={showAlert}>Show Alert</Button>)
        }
    </div>
  )
}

export default About