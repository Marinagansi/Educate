import React from "react";
import { useState } from "react";
import {Link, Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Uni from "./pages/College/Unii";
import Signup from "./registration/Signup";
import College from "./pages/List/college";
import Collegebyid from "./pages/List/Collegebyid";
// import Career from "./pages/careerpage/careerpage";
import CHome from "./pages/careerpage/careerpage1";
import Careers from "./pages/careerpage/career/index";
import Users from './pages/Admin/User';
import Unis from './pages/Admin/University';
import Unifrom from './pages/Admin/University/form';
import Scholarship from "./pages/scholarshipPage/Schlarpage";
import Success from "./pages/scholarshipPage/Success Page";
import Firstpage from "./pages/scholarshipPage/firstpage";

function App() {
  const [universities, setUniversity] = useState([])
  const [college, setCollege] = useState([])
  const match=useMatch('/college/:id')
  const matchs=useMatch('/uni/:id')
  const uni=match
                ?universities.find(b=>b._id===match.params.id)
                :null
  const unis=matchs
                ?college.find(b=>b._id===matchs.params.id)
                :null
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/college/:id" element={<Collegebyid uni={uni} />}/>
        <Route path="/uni/:id" element={<Collegebyid uni={unis} />}/>
        <Route path="/college" element={<College  universities={college} setUniversity={setCollege}/>} />
        <Route path="/uni" element={<Uni  universities={universities} setUniversity={setUniversity} />} />
        <Route path="/Career" element={<CHome />} />
        <Route path="/career/:id" element={<Careers />} />
        <Route path="/Scholarship" element={<Scholarship />} />
        <Route path="/Scholarships" element={<Firstpage />} />

        
        {/* admin page */}
        <Route exact path="/users" element={<Users/>} />
        <Route exact path="/adduni" element={<Unis/>} />
        <Route exact path="/forms" element={<Unifrom/>} />
        <Route exact path="/success" element={<Success/>} />
      </Routes>
    </>
  );
}

export default App;
