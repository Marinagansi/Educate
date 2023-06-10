import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Softwarica college of IT and Ecommerce</h1>
        <span className="siDistance">Dilibazar Kathmandu</span>
        {/* <span className="siTaxiOp">Free airport taxi</span>  */}
        <span className="siSubtitle">
   Bsc.Hons computing
        </span>
        {/* <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span> */}
        {/* <span className="siCancelOp">Free cancellation </span> */}
        {/* <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span> */}
      </div>
      <div className="siDetails">
        <div className="siRating">
          {/* <span>Excellent</span>
          <button>8.9</button> */}
        </div>
        <div className="siDetailTexts">
          {/* <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span> */}
          <button className="siCheckButton">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;