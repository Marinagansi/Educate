 import React from "react";
 import {
   Routes,
   Route,
 } from "react-router-dom";

import Home from './pages/Home/Home';
import Uni from './pages/College/College';
import Signup from './registration/Signup';
import College from './pages/List/List';

 function App() {
    return (
      <>
         <Routes>
        <Route path="/" element={<Home />}  />
      <Route path="/Signup" element={<Signup />}  /> 
      <Route path="/college" element={<College />}  /> 
      <Route path="/uni" element={<Uni />}  /> 
        </Routes> 
      </>

    );
      
 }

 export default App;
