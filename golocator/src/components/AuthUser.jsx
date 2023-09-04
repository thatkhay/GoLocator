import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Signin from "../pages/Signin";

import { Button } from "react-bootstrap";
const AuthUser = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Add an observer to check if the user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
        
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Clean up the observer on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Handle the logout event
    auth.signOut();
  };


  return (
    <div style={{marginTop: '2rem'}}>
      {user ? (
        <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: 'column' }}>
          <p style={{ marginTop: '1rem', fontWeight: '700' }}> Hello {user.displayName} this is your current location</p>
         
          <Button onClick={handleLogout} style={{ border: '0', backgroundColor: 'black', borderRadius: '.4rem', height: '2rem', color: 'white', marginTop: '1rem', marginBottom: '2rem' }}>Logout</Button>
        </div>
        
      ) : ( 
        <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: 'column' }}>
        <Signin />
        <h1>You are not logged in</h1>
        </div>
      
      )}
    </div>
  );
};

export default AuthUser;
