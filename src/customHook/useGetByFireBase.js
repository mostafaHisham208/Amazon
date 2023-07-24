import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/instanceFire";
import React, { useEffect, useState } from "react";
import Instance from "../instanceAxios/instance";
// import Instance from "../instanceAxios/instance";

const UseGetByFireBase = (
  url,
  filterByBrand,
  filterByColor,
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
  const [allColor, setAllColor] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    // Instance.get(url)
    //   .then((res) => {
    //     setProductsOrginal(res.data.products);
    //     setProducts(res.data.products);
    //     let price = res.data.products.map((prd) => prd.price);
    //     setMaxPrice(Math.max(...price));
    //     setMaxRange(Math.max(...price));
    //     setMinPrice(Math.min(...price));
    //     setMinRange(Math.min(...price));
    //     let brand = res.data.products.map((prd) => prd.brand);
    //     setAllBrand(brand);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const items = collection(db, url);
    getDocs(items).then((res) => {
      // console.log(res.docs);
      let items = res.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      // console.log(items);
      let data = items.map((item) => {
        const data = item.data;
        data.id = item.id;
        return data;
      });
      // console.log(data);
      setProductsOrginal(data);
      setProducts(data);
      let price = data.map((prd) => prd.price);
      setMaxPrice(Math.max(...price));
      setMaxRange(Math.max(...price));
      setMinPrice(Math.min(...price));
      setMinRange(Math.min(...price));
      let brand = data.map((prd) => prd.brand);
      setAllBrand(brand);
      let color = data.map((prd) => prd.color);
      setAllColor(color);
    });
  }, []);

  useEffect(() => {
    if (filterByBrand.length === 0 && filterByColor.length === 0) {
      let prdByFilter = productsOrginal.filter(
        (prd) =>
          allBrand.includes(prd.brand) &&
          allColor.includes(prd.color) &&
          prd.price >= parseInt(minPrice) &&
          prd.price <= parseInt(maxPrice) &&
          prd.rating >= rating
      );
      setFilter(prdByFilter);
    } else if (filterByBrand.length > 0 && filterByColor.length === 0) {
      let prdByFilter = productsOrginal.filter(
        (prd) =>
          filterByBrand.includes(prd.brand) &&
          allColor.includes(prd.color) &&
          prd.price >= parseInt(minPrice) &&
          prd.price <= parseInt(maxPrice) &&
          prd.rating >= rating
      );
      setFilter(prdByFilter);
    } else if (filterByBrand.length === 0 && filterByColor.length > 0) {
      let prdByFilter = productsOrginal.filter(
        (prd) =>
          filterByColor.includes(prd.color) &&
          allBrand.includes(prd.brand) &&
          prd.price >= parseInt(minPrice) &&
          prd.price <= parseInt(maxPrice) &&
          prd.rating >= rating
      );
      setFilter(prdByFilter);
    } else if (filterByBrand.length > 0 && filterByColor.length > 0) {
      let prdByFilter = productsOrginal.filter(
        (prd) =>
          filterByColor.includes(prd.color) &&
          filterByBrand.includes(prd.brand) &&
          prd.price >= parseInt(minPrice) &&
          prd.price <= parseInt(maxPrice) &&
          prd.rating >= rating
      );
      setFilter(prdByFilter);
    }
  }, [filterByBrand, filterByColor, minPrice, maxPrice, rating]);
  // console.log(filter);
  useEffect(() => {
    setProducts(filter);
  }, [filter]);
  return { productsOrginal, products, maxRange, minRange };
};

export default UseGetByFireBase;
