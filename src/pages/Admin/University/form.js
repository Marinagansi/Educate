import React, { useState, useEffect } from "react";
import DashboardHeader from "../../../Component/Admin/DashboardHeader";
import "../styles.css";
import SideBar from "../../../Component/Admin/Sidebar";
import sidebar_menu from "../../../Component/Admin/constants/sidebar-menu";
import { Form, FormGroup, FormFeedback } from "reactstrap";
import { App, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import productService from "./Productservice";

function Forms() {
  const [name, setname] = useState("");
  const [overview, setoverview] = useState("");
  const [location, setlocation] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [types, settypes] = useState("");
  const [fees, setfees] = useState("");
  const [major, setmajor] = useState("");
  const [admission, setadmission] = useState("");
  const [uni, setimage] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("uni", uni);
    formdata.append("name", name);
    formdata.append("overview", overview);
    formdata.append("location", location);
    formdata.append("phone", phone);
    formdata.append("email", email);
    formdata.append("types", types);
    formdata.append("fees",fees);
    formdata.append("major", major);
    formdata.append("admission", admission);
    productService.adduni(formdata).then((response) => {
      console.log(response.data);
      message.success("Your product has been added");
      Navigate("/adduni")
    }).catch((err) =>
    window.alert(err.response.data.error)
  );
  };
  return (
    <div className="dashboard-container">
      <SideBar menu={sidebar_menu} />
      <div className="dashboard-content">
        <Link to="/forms">
          {" "}
          <DashboardHeader btnText="New productment" />
        </Link>

        <div className="dashboard-content-container uniform">
          <form
            className="forms"
            style={{
              padding: "0px 60px",
              "border-radius": "10px",
              border: "1px solid black",
              marginTop: "1rem",
            }}
          >
            <div className="formInput">
              <h1 style={{"fontSize":"1.1rem"}}>Fill up the detail information of university</h1>
              <input
                type="file"
                placeholder="Image"
                onChange={(e) => setimage(e.target.files[0])}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="overview"
                value={overview}
                onChange={(e) => setoverview(e.target.value)}
                required
              />{" "}
              <input
                className="input"
                type="text"
                placeholder="location"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                required
              />{" "}
              <input
                className="input"
                type="text"
                placeholder="phone"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required
              />{" "}
              <input
                className="input"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />{" "}
              <input
                className="input"
                type="text"
                placeholder="types"
                value={types}
                onChange={(e) => settypes(e.target.value)}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="fees"
                value={fees}
                onChange={(e) => setfees(e.target.value)}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="major"
                value={major}
                onChange={(e) => setmajor(e.target.value)}
                required
              />
               <input
                className="input"
                type="text"
                placeholder="form link"
                value={admission}
                onChange={(e) => setadmission(e.target.value)}
                required
              />
            </div>

            <button className="sbtn" onClick={handleSubmit} type="submit">
              Add Univisersity
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forms;
