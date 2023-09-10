import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import IpTracker from "./pages/IpTracker";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
function App() {
 
  return (
<div style={{backgroundColor: 'rgb(176, 203, 253)' }}>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/user-info" element={<WelcomePage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/ip-tracker" element={<IpTracker/>}/>
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  </Router>
  <ToastContainer/>
  </div>
    
    
  );
}

export default App;
