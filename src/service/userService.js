import axios from 'axios';
const url = "http://localhost:3000/users";

const login=(user)=>{
    return axios.post(`${url}/login`,user);
}
export default{login};