
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

<div className="containers" style={{width:"100%", height:400, objectFit:"cover", margin:0}}>
<img src={building} alt=""style={{width:"100%"}} />

</div>
</div>

    );

    
};
export default Uni;