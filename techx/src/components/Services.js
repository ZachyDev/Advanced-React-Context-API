import React from 'react'
import { Alert } from 'react-bootstrap'
function Services() {
  return (
    <>
    <h1>Our Services</h1>
    {
        [
            'primary',
            'success',
            'danger',
            'secondary',
            'light',
            'warning',
            'info',
            'dark'
        ].map(variant => {
            return(
                <Alert key={variant} variant={variant} dismissible>
                <Alert.Heading>TechX Global</Alert.Heading>
                    <p>We are moving to techx.com starting this November!</p>
                <Alert.Link href='https://zachary.io.ke'>Visit site</Alert.Link>
                </Alert>
            )
        })
    }
    </>
  )
}

export default Services