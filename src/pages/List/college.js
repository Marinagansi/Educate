import "./list.css";
import Header from "../../Component/Header/Header";
import Helmet from "../../Component/Helmet";
import Navbar from "../../Component/Navbarmenu/Navbar";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../../Component/commonsection/Commonsection";


import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Component/searchItem/SearchItemC";
// import SearchBar from "../../Component/Careers/Blog/SearchBar";
import universities from '../../service/Uniservice';
import Footer from "../../Component/Footer/footer";


const List = ({universities,setUniversity}) => {
  // const [university,setUniversity]=useState([]);
  const [search, setSearch] = useState("");
  const [val, setVal] = useState("");
 
  const [searchloca, setSearchloca] = useState("");
  const [searchtype ,setSearchtype] = useState("");

  const [originalUni, setOriginalUni] = useState([]);
  

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

  const data=[
    "management",
    "science",
    "Humanities",
    
  ]

  // Search
  const handleSearchResults = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = universities.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) 
          // ||
          // item.description.toLowerCase().includes(search.toLowerCase())
      );
      setUniversity(search_results);
    }
  };

  
  // Clear search and show all blogs
  const handleClearSearch = () => {
    setUniversity(universities);
    setSearch('');
  };
  return (
    <div>
      <Navbar />

      {/* <HeroSection/> */}
      <Helmet title="Signup">
        <section className="p-0">
          <CommonSection title=" “Opportunities don’t happen. You create them.”" uni={universities} setuni={setUniversity}/>

        
        </section>
      </Helmet>
      
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
                  <label>Majors</label>

                  <form onsubmit={(e) => handleSearchBar(e)}>
                    <input
                      list="data"
                      value={search}
                      type="text"
                      onChange={(e) => _majorSearch(e)}
                      placeholder="Search by major"
                    />
                    <datalist id="data" style={{ "backgroundColor": "white" }}>
                      {data.map((op) => (
                        <option>{op}</option>
                      ))}
                    </datalist>

                    {/* <h1>{val}</h1> */}
                  </form>
                </div>
            
       
          </div>
         
          <div className="listResult">
            <SearchItem university={universities} setUniversity={setUniversity}/>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default List;
