import { useState } from "react";
import { FaSearch ,FaCross} from "react-icons/fa";

import "./Searchbar.css";

export const SearchBar = ({ uni,setuni }) => {
  const [search, setSearch] = useState('');
  // const [input, setInput] = useState([]);

  
  // const handleChange = (value) => {
  //   setInput(value);
  //   // fetchData(value);
  // };

   // Search
   const _handleSearch = (e) => {
    setSearch(e.target.value);
    if(e.target.value!==''){
      let search_results=uni.filter((item)=>
      
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setuni(search_results);
    }
    else{
      setuni(uni);
    }
  }

    // Clear search and show all blogs
    const handleClearSearch = () => {
      setSearch('');
      setuni(uni);
      //doing referesh
    };
  
  
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="search by college name..."
        value={search}
        onChange={(e) => _handleSearch(e)}
        
      />    {search !== '' && <FaCross onClick={handleClearSearch} />}
      <button>Go</button>
    </div>
  );
};