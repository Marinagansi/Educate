import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./Searchbar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  
  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="search by college name..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};