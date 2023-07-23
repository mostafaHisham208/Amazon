import React, { useEffect, useState } from "react";

const FilterByColor = ({ products, filterByColor, setFilterByColor }) => {
  let [colors, setColors] = useState([]);
  useEffect(() => {
    //filter return brandes by api
    if (products !== undefined) {
      let colorByApi = products.map((e, i) => e.color);
      //result not repetition in brands
      let newColor = [...new Set(colorByApi)];
      setColors(newColor);
    }
  }, [products]);
  // console.log(colors);
  let handleFilter = (event) => {
    if (event.target.checked) {
      setFilterByColor([...filterByColor, event.target.value]);
    } else {
      let filter = filterByColor.filter(
        (color) => color !== event.target.value
      );

      setFilterByColor(filter);
    }
  };

  return (
    <div>
      <div className="form-check">
        {colors.map((color, index) => {
          return (
            <div key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={color}
                onClick={(e) => {
                  handleFilter(e);
                }}
              />
              <label className="form-check-label">{color}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterByColor;
