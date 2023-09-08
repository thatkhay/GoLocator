import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { auth } from '../firebase';
import { Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true); 
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false); 
        navigate("/user-info");
        // console.log(userCredential);
      })
      .catch((error) => {
        setLoading(false);
        setError("Invalid Credentials") 
        // console.log(error);
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
    
              <h2 className='text-center mb-4' style={{ fontWeight: '700' }}>Sign in</h2>
              <Form onSubmit={handleSignin}>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control className='mb-4' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control className='mb-4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button className='w-100 mt-4' type='submit' disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"} 
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signin;
