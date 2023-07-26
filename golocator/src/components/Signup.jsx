
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { auth } from '../firebase'

const Signup = () => {
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmpass, setConfirmpass] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)


const handleSignin = (e) => {
  e.preventDefault()
  // console.log('signin baby');
  if (password !== confirmpass){
    return setError(`password don't match`)
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setError(``)
    setLoading(true)
    updateProfile(userCredential.user, {
      displayName: username, // Set the display name to the username entered
    })
    // .then(() => {
    //    console.log('User profile updated successfully.');
    // })
      console.log(userCredential); 
  }).catch((error) => {
      console.log(error);
      setError('Account creation failed, try again.')
  })
  setLoading(false)
}

  return (

    
    <div>
      <Card>
        <Card.Body>
       
      {error && <Alert variant='danger' style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center' }}>{error}</Alert>}
          <h2 className='text-center mb-4'>Sign up</h2>
          <Form onSubmit={handleSignin}>
            <Form.Group id='name'>
              <Form.Label>Username</Form.Label>
              <Form.Control className='mb-4' type='text' value={username} onChange={(e) => setUsername(e.target.value)}  required/>
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control className='mb-4' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control className='mb-4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Form.Group id='password confirm'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control className='mb-4' type='password' value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} required/>
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-4' type='submit'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
Already have an account? Log in
      </div>
    </div>
  )
}

export default Signup