import { useState ,useEffect} from "react";
import { FaSearch ,FaCross} from "react-icons/fa";

import "./Searchbar.css";

export const SearchBar = ({ uni,setuni }) => {
  const [search, setSearch] = useState('');
  const [originalUni, setOriginalUni] = useState([]);


  if (originalUni.length === 0 && uni.length > 0) {
    setOriginalUni(uni); // Initialize originalUni with the initial value of uni
  }

   // Search
   const _handleSearch = (e) => {
    const inputValue = e?.target?.value ?? ''; 
    setSearch(inputValue);
    if (inputValue!== '') {
      try {
        let search_results = uni.filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setuni(search_results);
        console.log(`uni is ${uni}`);
        if (search_results.length === 0) {
          setuni(originalUni);
        }
        
      } catch (error) {
        console.error('Error occurred while filtering:', error);
        setuni(originalUni);
      }
    } else {
      setuni(originalUni);
    }
   }


    // Clear search and show all blogs
    const handleClearSearch = () => {
      setSearch('');
      setuni(uni);
      //doing referesh
    };
    const handleSearchBar = (e) => {
      e.preventDefault();
      _handleSearch();
    };
  
  return (
    <>
      <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <form onSubmit={handleSearchBar}>
      <input 
        type='text'
        placeholder='Search By College Name' 
        value={search}
        onChange={_handleSearch}
      />
      
      {/* {{search} && <span onClick={handleClearSearch}>X</span>}
      <button>Go</button> */}
    </form>
      {/* <input
        placeholder="search by college name..."
        value={search}
        onChange={(e) => _handleSearch(e)}
        
      />    {search !== ''  && <FaCross onClick={handleClearSearch} />}
      <button>Go</button> */}
    </div>

    
    </>
  
  );
};