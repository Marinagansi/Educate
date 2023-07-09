import { useState } from "react";
import "./scholarPage.css";
import FormInput from "../../Component/Scholarship/Forminput";
import Navbar from "../../Component/Navbarmenu/Navbar";

const Scholarship = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Fullname",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      // label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
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
        name: "Eduaction",
        type: "text",
        placeholder: "Education SEE +2 Bachelors",
        errorMessage: "It should be a valid email address!",
        // label: "Education",
        required: true,
      },
    {
      id: 4,
      name: "password",
      type: "file",
      placeholder: "Letter",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Letter",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "Documents",
      type: "file",
      placeholder: "Documents",
      errorMessage: "Passwords don't match!",
      label: "Documents",
      // pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <h1 classname="h1">Apply for scholarship</h1>
        <p>5 students will be given scholarship</p>
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