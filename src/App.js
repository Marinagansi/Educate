import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Uni from "./pages/College/College";
import Signup from "./registration/Signup";
import College from "./pages/List/List";
import Collegebyid from "./pages/List/collegebyid";
// import Career from "./pages/careerpage/careerpage";
import CHome from "./pages/careerpage/careerpage1";
import Careers from "./pages/careerpage/career/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/college" element={<College />} />
        <Route path="/uni" element={<Uni />} />
        {/* <Route path="/Career" element={<Career />} /> */}
        <Route path="/Collegebyid" element={<Collegebyid />}/>
        <Route path="/Career" element={<CHome />} />
        <Route path="/career/:id" element={<Careers />} />
        

      </Routes>
    </>
  );
}

export default App;
