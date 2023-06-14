 import React from "react";
 import {
   Routes,
   Route,
 } from "react-router-dom";

import Home from './pages/Home/Home';
import Uni from './pages/College/College';
import Signup from './registration/Signup';
import College from './pages/List/List';
import Career from './pages/careerpage/careerpage';

 function App() {
    return (
      <>
         <Routes>
        <Route path="/" element={<Home />}  />
      <Route path="/Signup" element={<Signup />}  /> 
      <Route path="/college" element={<College />}  /> 
      <Route path="/uni" element={<Uni />}  />
      <Route path="/Career" element={<Career/>}  />  
        </Routes> 
      </>

    );
      
 }

 export default App;
