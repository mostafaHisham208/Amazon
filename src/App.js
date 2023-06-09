import React from "react";
import "./App.css";
import Laptops from "./pages/laptops/laptops";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/productDetails/productDetails";
import { Container } from "react-bootstrap";
import Mobiles from "./pages/mobile/mobiles";
import Lighting from "./pages/lighting/lighting";
import WomenDresses from "./pages/women-dresses/womenDresses";
import Jewellery from "./pages/jewellery/jewellery";
import Shirts from "./pages/shirts/shirts";
import Shoes from "./pages/shoes/shoes";
import Sunglasses from "./pages/sunglasses/sunglasses";
import Cart from "./pages/cart/cart";
import NotFound from "./pages/notFound/notFound";
import Header from "./Header/Header";
import Footer from "./Footer/footer";

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Routes>
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/dresses" element={<WomenDresses />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/sheos" element={<Shoes />} />
          <Route path="/sunglasses" element={<Sunglasses />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
