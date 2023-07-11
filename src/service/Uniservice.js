import axios from "axios";
const baseurl="http://localhost:3000/university";
const collegeurl="http://localhost:3000/college";
function gettalluniversity(){
    return axios.get(baseurl);
}

function gettallCollge(){
    return axios.get(collegeurl);
}

export default{gettalluniversity,gettallCollge}