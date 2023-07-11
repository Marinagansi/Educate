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
  const navigate = useNavigate();

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
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      // label: "Birthday",
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
      placeholder: "Letter",
      errorMessage:
        "Required",
      label: "Letter",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...values };
    axios.post("http://localhost:3000/scholarship", user).
    then((res) => {
        console.log(res.data);
       
        message.success("we have received your application")
        navigate("/success");
    }).catch((err) => {message.error(err.response.data.err)});

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
        <p style={{"fontSize":"1rem","lineHeight":"none"}}>Please Fill up the given field. If you have any queries<br/> contact to +000-6605505 </p>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="sbtn">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Scholarship;