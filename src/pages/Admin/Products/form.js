import React, { useState, useEffect } from "react";
import DashboardHeader from "../../../components/Admin/DashboardHeader";
import "../styles.css";
import SideBar from "../../../components/Admin/Sidebar";
import sidebar_menu from "../../../constants/sidebar-menu";
import { Form, FormGroup, FormFeedback } from "reactstrap";
import { App, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import productService from './Productservice';

function Forms() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [product, setimage] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata=new FormData();
    formdata.append('product',product);
    formdata.append('name',name);
    formdata.append('description',description);
    productService
      .addproduct(formdata)
      .then((response) => {
        console.log(response.data);
        message.success("Your product has been added");
        Navigate("/products").catch((err) =>
          window.alert(err.response.data.error)
        );
      });
  };
  return (
    <div className="dashboard-container">
      <SideBar menu={sidebar_menu} />
      <div className="dashboard-content">
        <Link to="/forms">
          {" "}
          <DashboardHeader btnText="New productment" />
        </Link>

        <div className="dashboard-content-container">
          <Form>
            <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
              <i class="ri-user-line"></i>
              <input
                type="file"
                placeholder="Image"
              
                onChange={(e) => setimage(e.target.files[0])}
                required
              />
            </FormGroup>
            <FormGroup className="login__form d-flex align-items-center gap-8 mb-8">
              <i class="ri-user-line"></i>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
              <span>
                <i class="ri-mail-line"></i>
              </span>
              <input
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                required
              />
            </FormGroup>

            <button
              className="login__btn "
              onClick={handleSubmit}
              type="submit"
            >
              Add picture
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Forms;
