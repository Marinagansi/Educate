import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from '.././registration/Signup.js';
import Home from '.././pages/Home/Home';

const routes=()=>{
    <Routes>
     
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>

    
}
export default routes;