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
import SearchItem from "../../Component/searchItem/SearchItem";
// import SearchBar from "../../Component/Careers/Blog/SearchBar";
import universities from '../../service/Uniservice';


const List = ({universities,setUniversity}) => {
  // const [university,setUniversity]=useState([]);
  const [search, setSearch] = useState("");

  const data=[
    "management",
    "science",
    "Humanities",
    
  ]

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
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
              <label>College Name</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>majors</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>location</label>
              <input type="text" />
            </div>
            {/* <button>Search</button> */}
          </div>
         
          <div className="listResult">
            <SearchItem university={universities} setUniversity={setUniversity}/>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default List;
