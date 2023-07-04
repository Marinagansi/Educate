import Navbarmenu from "../../Component/Navbarmenu/Navbar.js";
import { SearchBar } from "../../Component/Universities/Searchbar.js";
import Filter from "../../Component/filter/Filter.js";
import building from "../../assets/images/collegeBuilding.png";
import SearchItem from "../../Component/searchItem/SearchItem.js";
import UniSection from "../../Component/commonsection/Unipage.js";
import sideSearchBar from "../../Component/Universities/sidesearchbar.js";
import Helmet from "../../Component/Helmet";
import React, { useState } from "react";

const Uni = ({ universities, setUniversity }) => {
  const [val, setVal] = useState("");
  const [search, setSearch] = useState("");
  const [searchloca, setSearchloca] = useState("");
  const [originalUni, setOriginalUni] = useState([]);
  const data = ["Java", "JavaScript", "React js", "Python", "C", "C++"];

  if (originalUni.length === 0 && universities.length > 0) {
    setOriginalUni(universities); // Initialize originalUni with the initial value of uni
  }

  const _majorSearch = (e) => {
    const inputValue = e?.target?.value ?? ''; 
    setSearch(inputValue);
    if (inputValue!== '') {
      try {
        let search_results = universities.filter((item) =>
          item.major.toLowerCase().includes(inputValue.toLowerCase())
        );
        setUniversity(search_results);
        console.log(`uni is ${universities}`);
        if (search_results.length === 0) {
          setUniversity(originalUni);
        }
        
      } catch (error) {
        console.error('Error occurred while filtering:', error);
        setUniversity(originalUni);
      }
    } else {
      setUniversity(originalUni);
    }
  };
  
  const handleSearchBar = (e) => {
    e.preventDefault();
    _majorSearch();
  };

  const _locationSearch = (e) => {
    setSearchloca(e.target.value);
    if (e.target.value !== "") {
      let search_result = universities.filter((item) =>
        item.location.toLowerCase().includes(searchloca.toLowerCase())
      );
      setUniversity(search_result);
    } else {
      setUniversity(universities);
    }
  };
  return (
    <div>
      <Navbarmenu />
      <Helmet title="Signup">
        <section className="p-0">
          <UniSection title=" " uni={universities} setuni={setUniversity} />
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
                  {/* <sideSearchBar
                    data={data}
                    value={search}
                    clearSearch={handleClearSearch}
                    formSubmit={handleSearchBar}
                    handleSearchKey={_majorSearch}
                  /> */}
                

                  <form onsubmit={(e) => handleSearchBar(e)}>
                    <input
                      list="data"
                      value={search}
                      type="text"
                      onChange={(e) => _majorSearch(e)}
                      placeholder="Search"
                    />
                    <datalist id="data" style={{ backgroundColor: "white" }}>
                      {data.map((op) => (
                        <option>{op}</option>
                      ))}
                    </datalist>

                    <h1>{val}</h1>
                  </form>
                </div>
                <div className="lsItem">
                  <label>Location</label>
                  <input
                    type="text"
                    value={searchloca}
                    onChange={(e) => _locationSearch(e)}
                  />
                </div>
                <div className="lsItem">
                  <label>Type</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="listResult">
              <SearchItem
                university={universities}
                setUniversity={setUniversity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Uni;
