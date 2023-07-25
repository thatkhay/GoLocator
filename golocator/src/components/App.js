import React from "react";
import Signup from "./Signup";

import { Container } from "react-bootstrap";
import Signin from "./Signin";

function App() {
 
  return (
   <>
   <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
   <div className="w-100 " style={{ maxWidth: '400px'}}>
   <Signup/>
   <Signin/>
   </div>
   
   </Container>
 
   </>
    
    
  );
}

export default App;
