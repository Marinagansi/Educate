
import Navbarmenu from "../../Component/Navbarmenu/Navbar.js";
import  { SearchBar } from '../../Component/Universities/Searchbar.js';
import Filter from '../../Component/filter/Filter.js'
import building from "../../assets/images/collegeBuilding.png";

const Uni=()=>{
    return(
        <div>
<Navbarmenu/>
<SearchBar/>
<Filter/>
<div></div>
<div className="containers" style={{width:"100%", height:300, objectFit:"cover", "margin-top":"18px"}}>
<img src={building} alt=""style={{width:"100%"}} />

</div>
</div>

    );

    
};
export default Uni;