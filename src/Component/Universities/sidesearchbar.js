import React from 'react';
import "./Searchbar.css";

const sideSearchBar = ({ formSubmit, value, handleSearchKey, clearSearch, data}) => (
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>
        <input  list="data" 
          type='text'
          placeholder='Search By Category' 
          value={value}
          onChange={handleSearchKey}
         style={{"backgroundColor":'black','width':'100px','height':'30px'}}
         />
        <datalist id="data">
                 
                 {data.map((op)=><option>{op}</option>)}
             </datalist>
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
    );

    export default sideSearchBar;