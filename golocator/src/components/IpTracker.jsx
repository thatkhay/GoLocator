import React from 'react'
import { Card, Form , Button, Container} from 'react-bootstrap'
import arrow from '../images/icon-arrow.svg'
import background from '../images/pattern-bg-desktop.png'

const IpTracker = () => {
  return (
    <Container className="d-flex container-fluid align-items-center justify-content-center"  >
    <Card className='mt-4 w-100'  style={{ maxWidth: '800px', minHeight: '90vh' }}>
        <div className='w-100'  style={{ maxWidth: '800px'}}>
            <img  className='w-100 position-absolute' src={background} alt="" style={{backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  height: '10rem'}} />
        </div>
        <Card.Body className='position-relative'>
          <h1 className='text-white text-center mb-4'>Go Locator</h1>
<Form>
    <Form.Group>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.3rem' }}>
        <Form.Control type='input' name='ipaddress' id='ipaddress' placeholder='Search for IP Address or Domain' required />
        <Button  type='submit' style={{ backgroundColor: 'black' }}>
            <img src={arrow} alt="" />
        </Button>
        </div>
    </Form.Group>
</Form>
<Card className="d-flex align-items-center justify-content-center mt-2" style={{ flexDirection: 'row', height: '7rem' }}>
    <Card.Body   style={{ borderRight: '1px solid rgb(221, 218, 218)' , height: '5rem'}}>
     <h2>hhh</h2>
     <p>bbb</p>
    </Card.Body>
    <Card.Body style={{ borderRight: '1px solid rgb(221, 218, 218)' , height: '5rem'}}>
     <h2>hhh</h2>
     <p>bbb</p>
    </Card.Body>
     <Card.Body style={{ borderRight: '1px solid rgb(221, 218, 218)' , height: '5rem'}}>
     <h2>hhh</h2>
     <p>bbb</p>
    </Card.Body>
    <Card.Body style={{ height: '5rem'}}>
     <h2>hhh</h2>
     <p>bbb</p>
    </Card.Body> 
     </Card>

        </Card.Body>

       

    </Card>

    
    </Container>
  )
}

export default IpTracker