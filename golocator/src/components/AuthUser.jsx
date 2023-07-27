import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Signin from "../pages/Signin";

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
    return <h1>Loading...</h1>; 
  }

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : ( 
        <>
        <Signin />
        <h1>Please login to see the welcome message</h1>
        </>
      
       
      )}
    </div>
  );
};

export default AuthUser;
