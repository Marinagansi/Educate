import React from "react";
import { useState } from "react";
import {Link, Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Uni from "./pages/College/Unii";
import Signup from "./registration/Signup";
import College from "./pages/List/college";
import Collegebyid from "./pages/List/collegebyid";
// import Career from "./pages/careerpage/careerpage";
import CHome from "./pages/careerpage/careerpage1";
import Careers from "./pages/careerpage/career/index";

function App() {
  const [universities, setUniversity] = useState([])
  const match=useMatch('/college/:id')
  const uni=match
                ?universities.find(b=>b._id===match.params.id)
                :null
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/college/:id" element={<Collegebyid uni={uni} />}/>
        <Route path="/college" element={<College  universities={universities} setUniversity={setUniversity}/>} />
        <Route path="/uni" element={<Uni  universities={universities} setUniversity={setUniversity} />} />
        <Route path="/Career" element={<CHome />} />
        <Route path="/career/:id" element={<Careers />} />
        

      </Routes>
    </>
  );
}

export default App;
