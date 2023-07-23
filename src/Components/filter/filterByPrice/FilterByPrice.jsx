import React from "react";
import "./filterByPrice.css";

const FilterByPrice = ({
  maxRange,
  minRange,
  maxPrice,
  minPrice,
  setMaxPrice,
  setMinPrice,
}) => {
  let handleChange = (event) => {
    if (event.target.name === "min") {
      setMinPrice(event.target.value);
    } else {
      setMaxPrice(event.target.value);
    }
  };

  return (
    <div className="range  ">
      <div className="range-slider">
        <span className="range-selected"></span>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="min"
          min={minRange}
          max={maxRange}
          value={maxPrice}
          step="1"
          name="max"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="range"
          className="max"
          min={minRange}
          max={maxRange}
          value={minPrice}
          step="1"
          name="min"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="range-price d-flex  justify-content-between mt-3">
        <div className="wrapContent ">
          {" "}
          <p className="m-0">Min</p>
          <input
            className="w-100 text-center inputPrice"
            type="number"
            name="min"
            max={maxRange}
            min={minRange}
            value={minPrice}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="wrapContent">
          <p className="m-0 ">Max</p>
          <input
            className="w-100 text-center inputPrice"
            type="number"
            max={maxRange}
            min={minRange}
            name="max"
            value={maxPrice}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
