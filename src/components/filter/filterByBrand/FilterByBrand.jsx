import React, { useEffect, useState } from "react";
import "./filterByBrand.css";
const FilterByBrand = ({ products, filterByBrand, setFilterByBrand }) => {
  let [brands, setBrands] = useState([]);
  useEffect(() => {
    //filter return brandes by api
    let brandByApi = products.map((e, i) => e.brand);
    //result not repetition in brands
    let newBrand = [...new Set(brandByApi)];
    setBrands(newBrand);
  }, [products]);

  let handleFilter = (event) => {
    if (event.target.checked) {
      setFilterByBrand([...filterByBrand, event.target.value]);
    } else {
      let filter = filterByBrand.filter(
        (brand) => brand !== event.target.value
      );

      setFilterByBrand(filter);
    }
  };
  return (
    <div>
      <div className="form-check">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={brand}
                onClick={(e) => {
                  handleFilter(e);
                }}
              />
              <label className="form-check-label">{brand}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterByBrand;
