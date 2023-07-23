import React, { useEffect, useState } from "react";
import Instance from "../instanceAxios/instance";

const UseGetData = (
  url,
  filterByBrand,
  maxPrice,
  setMaxPrice,
  minPrice,
  setMinPrice,
  rating
) => {
  //store the all product by get api and result filter
  const [products, setProducts] = useState([]);
  //original data get by api send filter show data in screen
  const [productsOrginal, setProductsOrginal] = useState([]);
  const [maxRange, setMaxRange] = useState(0);
  const [minRange, setMinRange] = useState(0);
  const [allBrand, setAllBrand] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    Instance.get(url)
      .then((res) => {
        setProductsOrginal(res.data.products);
        setProducts(res.data.products);
        let price = res.data.products.map((prd) => prd.price);
        setMaxPrice(Math.max(...price));
        setMaxRange(Math.max(...price));
        setMinPrice(Math.min(...price));
        setMinRange(Math.min(...price));
        let brand = res.data.products.map((prd) => prd.brand);
        setAllBrand(brand);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (filterByBrand.length === 0) {
      let prdByFilter = productsOrginal.filter(
        (prd) =>
          allBrand.includes(prd.brand) &&
          prd.price >= parseInt(minPrice) &&
          prd.price <= parseInt(maxPrice) &&
          prd.rating >= rating
      );
      setFilter(prdByFilter);
    } else {
      let prdByFilter = productsOrginal.filter(
        (prd) =>
          filterByBrand.includes(prd.brand) &&
          prd.price >= parseInt(minPrice) &&
          prd.price <= parseInt(maxPrice) &&
          prd.rating >= rating
      );
      setFilter(prdByFilter);
    }

    // console.log(filterByBrand);
  }, [filterByBrand, minPrice, maxPrice, rating]);
  // console.log(filter);
  useEffect(() => {
    setProducts(filter);
  }, [filter]);
  return { productsOrginal, products, maxRange, minRange };
};

export default UseGetData;
