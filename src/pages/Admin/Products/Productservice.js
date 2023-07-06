import axios from "axios";
const baseUrl = "http://localhost:3000/product";

function getAllproduct() {
  
    return axios.get(baseUrl);
}


const addproduct = (credentials) => {
    return axios.post(`${baseUrl}`, credentials);
}

function deleteproduct(id) {
    return axios.delete(`${baseUrl}/${id}`);
}

export default {getAllproduct,addproduct,deleteproduct};