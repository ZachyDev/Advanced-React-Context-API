import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <Form>
        {/* email */}
        <Row className='mb-3'>
            <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='First Name'></Form.Control>
            </Form.Group>
            {/* password */}
            <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Last Name'></Form.Control>
            </Form.Group>
        </Row>
        {/* Nationality */}
        <Form.Group className='mb-3'>
          <Form.Label>Nationality</Form.Label>
          <Form.Control type='text' placeholder='Kenyan'></Form.Control>
        </Form.Group>

        <Row className='mb-3'>
        {/* City */}
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' placeholder='Nairobi'></Form.Control>
        </Form.Group>
        {/* State */}
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
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
          <Form.Label>Address</Form.Label>
          <Form.Control type='text' placeholder='Apartment, studio, or floor'></Form.Control>
        </Form.Group>
        </Row>
        
         {/* gender */}
         <Form.Select disabled className='mb-3'>
          <option>Male</option>
          <option>Female</option>
        </Form.Select>

        {/* agree to terms & conditions */}
        <Form.Group className='mb-3'>
            <Form.Check type='checkbox' label='Agree to our terms & conditions'></Form.Check>
        </Form.Group>
       
        <Button variant='primary'>Sign up</Button>
    </Form>
  )
}

export default Signup