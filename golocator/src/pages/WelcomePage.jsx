import React from 'react'
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';




const WelcomePage = () => {
  return (
    <div>
        <>
  
   <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
   <div className="w-100 " style={{ maxWidth: '400px'}}>
WelcomePage
Don't have an account?  <Link to='/signup'>Sign up</Link>
   </div>
   Already have an account? <Link to='/signin'>Log in</Link>
   </Container>
 
   </>
    
    
  );
    </div>
  )
}

export default WelcomePage