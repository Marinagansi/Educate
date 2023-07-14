import React from "react";
import { useState, useEffect } from "react"
import * as Components from '../Component/Signupcomponents';
import "./signup.css";
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios";
import { set } from "date-fns";
import {message} from 'antd';
import userService from "../service/userService";
import Navbar from "../Component/Navbarmenu/Navbar";

const Signup=()=> {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signIn, toggle] = useState(true);
    const navigate = useNavigate();


    const handleSignup = (e) => {
        e.preventDefault();
        const user = { name, email, password };
        axios.post("http://localhost:3000/users/register", user).
        then((res) => {
            console.log(res.data);
           
            message.success("welcome your account is register successfully")
            navigate("/signup");
        }).catch((err) => {message.error(err.response.data.err)});
    }

    

    const handleSignin = (e) => {
        e.preventDefault();
        if (!name || !password) {
            return message.error("please fill all the fields")
        }
        
        if (name==="admin" || password==="admin") {
            return navigate("/adduni")
        }
        else{
        userService.login({name,password})
        .then(response=>{
            console.log(response.data)
            window.localStorage.setItem('token', response.data.token)
            message.success("login successful")
            
            navigate('/')
        }).catch(err => message.error(err.response.data.err))
    }
    }

     return(
        <>
        <Navbar/>
        <Components.SignupBody>
          
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title style={{color:'black'}}>Create Account</Components.Title>
                     <Components.Inputs type='text' placeholder='Full Name'  value={name}
                     onChange={(e) => setName(e.target.value)} required
                     />
                     <Components.Inputs type='email' placeholder='Email' value={email}
                     onChange={(e) => setEmail(e.target.value)} required/>
                     <Components.Inputs type='password' placeholder='Password' value={password}
                     onChange={(e)=>setPassword(e.target.value)} required/>
                     <Components.Button onClick={handleSignup}>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title style={{color:'black'}}>Sign in</Components.Title>
                      <Components.Inputs type='username' placeholder='username' value={name}
                      onChange={(e) => setName(e.target.value)}/>
                      <Components.Inputs type='password' placeholder='Password' value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={handleSignin}>
                      Sign in
                        </Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title >Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title >EDUCATE</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)} >
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </Components.SignupBody>
         </>
     )
}

export default Signup;