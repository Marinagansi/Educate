import React, {useState, useEffect} from 'react';
import "./searchItem.css";
import {calculateRange, sliceData} from '../../utils/table-pagination';
import universities from '../../service/Uniservice';
import { Link, useNavigate } from "react-router-dom";

import { FaAddressBook,FaPhone,FaEnvelopeOpen} from "react-icons/fa";
const SearchItem = ({university,setUniversity}) => {
  const [page,setPage]=useState(1);
  const [pagination,setPagination]=useState([]);


  // Function to get all univerities
  useEffect(()=>{
    universities.gettallCollge().
    then (response=>{
      setPagination(calculateRange(response.data.data, 15));
      setUniversity(sliceData(response.data.data, page, 15));
         //setproduct(response.data.data);
         console.log(response.data)
    }).catch(err=>console.log(err))
  },[])


 

   // Change Page 
   const __handleChangePage = (new_page) => {
    setPage(new_page);
   universities.gettalluniversity().then(response=>{
        setPagination(calculateRange(response.data.data, 15));
        setUniversity(sliceData(response.data.data, page,15));
        //setproduct(response.data.data);
        console.log(response.data)
    }).catch(err=>console.log(err))
    // setproduct(sliceData(product, new_page, 5));
}

  return (
    <>
   {university.length !==0 ? university.map((item,index)=>(
    <div className="searchItem">
      
        <img
          src={"http://localhost:3000" + item.image}
          alt=""
        
          className="siImg" /><div className="siDesc">
            <h1 className="siTitles">{item.name}</h1>
            <span className="siDistances"><i class="fa-sharp fa-solid fa-location-dot"></i> {item.location}</span>
          
          

            <span className="siSubtitles"><i class="fa-sharp fa-solid fa-phone"></i> {item.phone}</span>
            <span className="siSubtitles"><i class="fa-sharp fa-solid fa-envelope"></i> {item.email}</span>
          </div><div className="siDetails">
            <div className="siRating"></div>
            <div className="siDetailText">
            <Link className="siCheckButton"to={`/uni/${item._id}`} style={{"text-decoration":"none","text-align":"center"}}>Apply now</Link>
             
            </div>
          </div>
      
      
    </div>
    )):null}
    </>
  );
};

export default SearchItem;
