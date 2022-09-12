import React from 'react'
import { Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <Form>
        {/* email */}
        <Row className='mb-3'>
            <Form.Group as={Col}>
              <FloatingLabel label='First Name'>
                <Form.Control type='text' placeholder='First Name'></Form.Control>
              </FloatingLabel>
             
            </Form.Group>
            {/* password */}
            <Form.Group as={Col}>
            <FloatingLabel label='Last Name'>
            <Form.Control type='text' placeholder='Last Name'></Form.Control>
            </FloatingLabel>
                
            </Form.Group>
        </Row>
        {/* Nationality */}
        <Form.Group className='mb-3'>
          <FloatingLabel label='Nationality'>
          <Form.Control type='text' placeholder='Kenyan'></Form.Control>
          </FloatingLabel>
          
        </Form.Group>

        <Row className='mb-3'>
        {/* City */}
        <Form.Group as={Col}>
          <FloatingLabel label='City'>
          <Form.Control type='text' placeholder='Nairobi'></Form.Control>
          </FloatingLabel>
          
        </Form.Group>
        {/* State */}
        <Form.Group as={Col}>
        <Form.Label>State</Form.Label>
          <Form.Select>
            <option>Kenya</option>
            <option>United States</option>
            <option>Tanzania</option>
            <option>Ukraine</option>
            <option>United Kingdom</option>
            <option>Rwanda</option>
            <option>Ukraine</option>
            <option>Norway</option>
            <option>Spain</option>
            <option>Brazil</option>
            <option>South Africa</option>
            <option>Nigeria</option>
            <option>Ethiopia</option>
            <option>Burundi</option>
            <option>Morocoo</option>
            <option>Switzerland</option>
          </Form.Select>
         
        </Form.Group>
         {/* Address */}
         <Form.Group as={Col}>
          <FloatingLabel label='Address'>
          <Form.Control type='text' placeholder='Apartment, studio, or floor'></Form.Control>
          </FloatingLabel>
        </Form.Group>
        </Row>

        {/* agree to terms & conditions */}
        <Form.Group className='mb-3'>
            <Form.Check type='checkbox' label='Agree to our terms & conditions'></Form.Check>
        </Form.Group>
       
        <Button variant='primary'>Sign up</Button>
    </Form>
  )
}

export default Signup