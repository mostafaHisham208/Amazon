import React from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import "./filterByRating.css";
const FilterByRating = ({ setRating }) => {
  let handleRating = (value) => {
    setRating(value);
    // console.log(value);
  };
  return (
    <div className=" filter-by-rating">
      <div
        className="Wrap-rating d-flex align-items-center"
        onClick={() => handleRating(4.5)}
      >
        <div className="rating">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
        </div>
        <span className="ms-1">Only</span>
      </div>
      <div
        className="Wrap-rating d-flex align-items-center"
        onClick={() => handleRating(3.5)}
      >
        <div className="rating">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />

          <ImStarEmpty />
        </div>
        <span className="ms-1">& Up</span>
      </div>
      <div
        className="Wrap-rating d-flex align-items-center"
        onClick={() => handleRating(2.5)}
      >
        <div className="rating">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />

          <ImStarEmpty />
          <ImStarEmpty />
        </div>
        <span className="ms-1">& Up</span>
      </div>
      <div
        className="Wrap-rating d-flex align-items-center"
        onClick={() => handleRating(1.5)}
      >
        <div className="rating">
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </div>
        <span className="ms-1">& Up</span>
      </div>
      <div
        className="Wrap-rating d-flex align-items-center"
        onClick={() => handleRating(0.5)}
      >
        <div className="rating">
          <ImStarFull />

          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </div>
        <span className="ms-1">& Up</span>
      </div>
    </div>
  );
};

export default FilterByRating;
