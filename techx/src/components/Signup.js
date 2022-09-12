import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <Form>
        {/* email */}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter email'></Form.Control>
            <Form.Text className='text-muted'>We will never share your email with anyone</Form.Text>
        </Form.Group>
        {/* password */}
        <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'></Form.Control>
        </Form.Group>
        {/* agree to terms & conditions */}
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox'></Form.Check>
        </Form.Group>
        {/* gender */}
        <Form.Select disabled>
          <option>Male</option>
          <option>Female</option>
        </Form.Select>
        <Button variant='primary'>Sign up</Button>
    </Form>
  )
}

export default Signup