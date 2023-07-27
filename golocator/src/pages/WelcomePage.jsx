import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import AuthUser from '../components/AuthUser';




const WelcomePage = () => {
  return (
   
  
   <div className="d-flex " style={{ minHeight: '100vh', flexDirection: 'column' }}>
   <div className="w-100 " >
    <Header />
    <AuthUser />
WelcomePage
Don't have an account?  <Link to='/signup'>Sign up</Link>
   </div>
   Already have an account? <Link to='/signin'>Log in</Link>
   </div>
 
  
    
  );
    
  
}

export default WelcomePage