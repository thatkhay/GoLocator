import React from 'react'
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Header from '../components/Header';




const WelcomePage = () => {
  return (
   
  
   <Container className="d-flex " style={{ minHeight: '100vh', flexDirection: 'column' }}>
   <div className="w-100 " >
    <Header />
WelcomePage
Don't have an account?  <Link to='/signup'>Sign up</Link>
   </div>
   Already have an account? <Link to='/signin'>Log in</Link>
   </Container>
 
  
    
  );
    
  
}

export default WelcomePage