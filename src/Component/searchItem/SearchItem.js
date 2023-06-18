import "./searchItem.css";
import { Link, useNavigate } from "react-router-dom";
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
        <span className="siSubtitle">Bsc.Hons computing</span>
      </div>
      <div className="siDetails">
        <div className="siRating"></div>
        <div className="siDetailTexts">
          <button className="siCheckButton">
            <Link to={"/Collegebyid"}>Apply now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
