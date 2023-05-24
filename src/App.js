 import React from "react";
 import {
   Routes,
   Route,
 } from "react-router-dom";
import Signup from './registration/Signup';
import Home from './pages/Home/Home';

 function App() {
    return (
      <>
         <Routes>
        <Route path="/home" element={<Home />}  />
      <Route path="/Signup" element={<Signup />}  /> 
        </Routes> 
      </>

    );
      
 }

 export default App;
