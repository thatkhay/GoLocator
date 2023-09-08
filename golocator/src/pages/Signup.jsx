import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { auth } from '../firebase';
import { Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmpass) {
      return setError(`Passwords don't match`);
    }
    setLoading(true); 

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        updateProfile(userCredential.user, {
          displayName: username, 
        }).then(() => {
          console.log('User profile updated successfully.');
        });

        setLoading(false); 
        navigate("/signin");
        console.log(userCredential);
      })
      .catch((error) => {
        setLoading(false); 
        console.log(error);
        setError('Account creation failed, try again.');
       
      });
  };

  return (
    <div>
      <Header />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100 " style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body>
              {error && <Alert variant='danger' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{error}</Alert>}
              <h2 className='text-center mb-4' style={{ fontWeight: '700' }}>Sign up</h2>
              <Form onSubmit={handleSignup}>
                <Form.Group id='name'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control className='mb-4' type='text' value={username} onChange={(e) => setUsername(e.target.value)} required  style={{ textTransform: 'capitalize' }}/>
                </Form.Group>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control className='mb-4' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control className='mb-4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Form.Group id='password confirm'>
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control className='mb-4' type='password' value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} required />
                </Form.Group>
                <Button disabled={loading} className='w-100 mt-4' type='submit'>
                  {loading ? "Signing up..." : 'Sign Up'} 
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/signin'>Log in</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
