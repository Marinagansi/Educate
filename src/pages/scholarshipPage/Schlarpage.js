import { useState } from "react";
import "./scholarPage.css";
import FormInput from "../../Component/Scholarship/Forminput";
import Navbar from "../../Component/Navbarmenu/Navbar";
import {message} from 'antd';
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios";



const Scholarship = () => {
  const [values, setValues] = useState({
    Fullname: "",
    email: "",
    birthday: "",
    Eduaction: "",
    letter: "",
  });

  const today = new Date();
  today.setFullYear(today.getFullYear() - 18); // Subtract 18 years from the current year
  const maxDate = today.toISOString().split('T')[0];
  
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const isYearDisabled = (year) => {
    return year === '2022';
  };

  const isDateDisabled = (date) => {
    const year = date.split('-')[0];
    return isYearDisabled(year);
  };

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Required",
      // label: "Username",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      // label: "Email",
      required: true,
    },
     
    {
        id: 4,
        name: "education",
        type: "text",
        placeholder: "Education SEE +2 Bachelors",
        errorMessage: "It should be a valid email address!",
        // label: "Education",
        required: true,
      },
    {
      id: 4,
      name: "letter",
      type: "Text",
      placeholder: "What do you want to study?",
      errorMessage:
        "Required",
      
      required: true,
    },
    {
      id: 5,
      name: "Documents",
      type: "File",
      placeholder: "Documents",
      errorMessage: "Passwords don't match!",
      label: "Documents",
      // pattern: values.password,
      required: true,
    },
  ];

  const handleSubmits = (e) => {
    e.preventDefault();
    const user = { ...values };
    axios.post("http://localhost:3000/scholarship", user).
    then((res) => {
        console.log(res.data);
       
        message.success("we have received your application")
        navigate("/success");
    }).catch((err) => {message.error(err.response.data.err)});

}

const handleSubmit = (e) => {
  e.preventDefault();
 
      message.success("we have received your application")
      navigate("/success");
 

}
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar/>
    <div className="Scholarship">
      <form  classname="forms" onSubmit={handleSubmit} style={{    "background-color": "white",
      "padding": "0px 60px",
      "border-radius": "10px"}}>
        <h1 classname="h1" style={{  "text-align":"center"}}>Apply for scholarship</h1>
        <p style={{"fontSize":"1rem","lineHeight":"24px"}}>Please Fill up the given field </p>
        <FormInput
  
   
    type="text"
    placeholder="Full Name"
    errorMessage=
      "Field is required"
    // label: "Username",
    pattern="^[A-Za-z\s]{3,16}$"
    required={true}
    />
     <FormInput
  

  type="email"
  placeholder="Email"
  errorMessage=
    "it should be a valid email address!"
 
    
  required={true}
  />
        <FormInput
      
    
      type="date"
      placeholder="Birthday"
      value={selectedDate}
      onChange={handleDateChange}
      label="Birth Date"
      min="1900-01-01"
      max={maxDate}
      disabled={isDateDisabled(selectedDate)}
    />
    <FormInput
     
       type="text"
       placeholder= "Education SEE +2 Bachelors"
       errorMessage= "Field required"
       // label: "Education",
       required= "true"
    />
    <FormInput style={{height:"100px"}}
    
       type= "Text"
      //  placeholder= "What do you want to study?"
       label="why you need scholarship?"
       errorMessage=
         "Required"
       
       required= "true"
    />

<FormInput
       label= "Require Document, Result, Certificate"
       type= "file"
       placeholder= "What do you want to study?"
       errorMessage=
         "Required"
       
       required= "true"
    />
    
        {/* {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        */}
        <button className="sbtn">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Scholarship;