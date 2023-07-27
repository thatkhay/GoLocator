import React from 'react'
import { Card, Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <div >
      <Container  className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' , maxWidth: '400px'}}>

   

  <Card>
    <Card.Body style={{ fontWeight: '700', color: 'red' }}>
      <h2 className='text-center mb-4' style={{ fontWeight: '700' }}> ERROR 404</h2>
      <p>Page not found</p>
    </Card.Body>
  </Card>
 

</Container>
    </div>
  )
}

export default NotFound