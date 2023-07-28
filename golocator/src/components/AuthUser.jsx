import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Signin from "./Signin";
import IpTracker from "./IpTracker";
import { Button } from "react-bootstrap";
const AuthUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Add an observer to check if the user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setLoading(false);
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
  if (loading) {
    return <h1>Loading.....</h1>; 
  }

  return (
    <div>
      {user ? (
        <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: 'column' }}>
          <h1>Welcome, {user.displayName}!</h1>
          
          <Button onClick={handleLogout} style={{ border: '0', backgroundColor: 'black', borderRadius: '.4rem', height: '2rem', color: 'white' }}>Logout</Button>
          <IpTracker/>
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
