import Navbarmenu from "../../Component/Navbarmenu/Navbar.js";
import { SearchBar } from "../../Component/Universities/Searchbar.js";
import Filter from "../../Component/filter/Filter.js";
import building from "../../assets/images/collegeBuilding.png";
import SearchItem from "../../Component/searchItem/SearchItem.js";
import UniSection from "../../Component/commonsection/Unipage.js";
import Helmet from "../../Component/Helmet";
import React, { useState } from "react";
const Uni = ({universities,setUniversity}) => {
  const [val,setVal]=useState('')
  const [search, setSearch] = useState('');
    const data=[
        "Java",
        "JavaScript",
        "React js",
        "Python",
        "C",
        "C++",
    ]

    const _handleSearch = (e) => {
      setSearch(e.target.value);
      if(e.target.value!==''){
        let search_results=universities.filter((item)=>
        
          item.major.toLowerCase().includes(search.toLowerCase())
        );
        setUniversity(search_results);
      }
      else{
        setUniversity(universities);
      }
    }
  return (
    <div>
      <Navbarmenu />
      {/* <SearchBar /> */}
      {/* <Filter/> */}
         {/* <div className="containers" style={{width:"100%", height:300, objectFit:"cover", "margin-top":"18px","margin-bottom":"100px"}}>
<img src={building} alt=""style={{width:"100%"}} />

</div> */}
 <Helmet title="Signup">
        <section className="p-0">
          <UniSection title=" " />

        
        </section>
      </Helmet>

      <div>
      <div className="listContainer">
        <div className="listWrapper">
        <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
            <div className="lsItem">
              <label>Majors</label>
              <input list="data" onChange={(e)=>setVal(e.target.value)} placeholder="Search" />
            <datalist id="data" style={{"backgroundColor":"white"}}>
               
                {data.map((op)=><option>{op}</option>)}
            </datalist>

            <h1>{val}</h1>
              {/* <input type="text" /> */}
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
         
          </div>
        <div className="listResult">
          <SearchItem university={universities} setUniversity={setUniversity} />
         
        </div>
      </div>
</div>
      
      </div>
   
    </div>
  );
};
export default Uni;
