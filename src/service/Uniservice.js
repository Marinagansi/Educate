import axios from "axios";
const baseurl="http://localhost:3000/university";

function gettalluniversity(){
    return axios.get(baseurl);
}

export default{gettalluniversity}