import React from 'react'
import Header from '../components/Header';
import AuthUser from '../components/AuthUser';




const WelcomePage = () => {
  return (
   
  
   <div className="d-flex " style={{ minHeight: '100vh', flexDirection: 'column', backgroundColor: 'rgb(176, 203, 253)' }}>
   <div className="w-100 " >
    <Header />
    <AuthUser />

   </div>
   
   </div>
 
  
    
  );
    
  
}

export default WelcomePage