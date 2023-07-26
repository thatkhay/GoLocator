
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { auth } from '../firebase'
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Signin = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSignin = (e) => {
    e.preventDefault()
    // console.log('signin baby');
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential); 
    }).catch((error) => {
        console.log(error);
    })
}

  return (
    <Container  className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>

   
    <div className="w-100 " style={{ maxWidth: '400px'}}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign in</h2>
          <Form onSubmit={handleSignin}> 
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control className='mb-4' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control className='mb-4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Button className='w-100 mt-4' type='submit'>Sign in</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
Don't have an account?  <Link to='/signup'>Sign up</Link>
      </div>
    </div>
    </Container>
  )
}

export default Signin