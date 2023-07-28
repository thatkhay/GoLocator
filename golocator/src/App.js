import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import Signup from "./Signup";
import Signin from "./components/Signin";
import NotFound from "./pages/NotFound";

function App() {
 
  return (

    <Router>
    <Routes>
      <Route exact path="/" element={<WelcomePage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  </Router>
   
    
    
  );
}

export default App;
