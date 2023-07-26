import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
 
  return (

    <Router>
    <Routes>
      <Route exact path="/" element={<WelcomePage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin/>} />
    </Routes>
  </Router>
   
    
    
  );
}

export default App;
