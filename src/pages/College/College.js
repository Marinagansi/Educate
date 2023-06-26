import Navbarmenu from "../../Component/Navbarmenu/Navbar.js";
import { SearchBar } from "../../Component/Universities/Searchbar.js";
import Filter from "../../Component/filter/Filter.js";
import building from "../../assets/images/collegeBuilding.png";
import SearchItem from "../../Component/searchItem/SearchItem";

const Uni = () => {
  return (
    <div>
      <Navbarmenu />
      <SearchBar />
      {/* <Filter/> */}
         <div className="containers" style={{width:"100%", height:300, objectFit:"cover", "margin-top":"18px","margin-bottom":"100px"}}>
<img src={building} alt=""style={{width:"100%"}} />

</div>

      <div>
      <div className="listContainer">
        <div className="listWrapper">
        <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
            <div className="lsItem">
              <label>Majors</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Location</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Type</label>
              <input type="text" />
            </div>
              
            </div>
            <button>Apply form</button>
          </div>
        <div className="listResult">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
</div>
      
      </div>
      {/* <div className="containers" style={{width:"100%", height:300, objectFit:"cover", "margin-top":"18px"}}>
<img src={building} alt=""style={{width:"100%"}} />

</div> */}
    </div>
  );
};
export default Uni;
