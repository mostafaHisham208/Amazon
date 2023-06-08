import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { GrLocation } from "react-icons/gr";
import Button from "react-bootstrap/Button";
import "./addToCart.css";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../../../storeByRedux/action/changeCart";

const AddToCard = (props) => {
  let [product, setProduct] = useState({});
  let [quantity, setQuantity] = useState(1);
  let [listCart, setListCart] = useState([]);
  let cart = useSelector((state) => state.cart.cart);
  let dispatch = useDispatch();
  let changeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  useEffect(() => {
    setListCart(cart);
    setProduct(props.product);
  }, [props.product, cart, listCart]);
  let addToCard = (prd) => {
    let newListCart = listCart.map((ele) => {
      if (ele.id === prd.id) {
        ele.order = ele.order + quantity;
        ele.stock = ele.stock - quantity;
        return ele;
      }
      return ele;
    });

    if (listCart.length > 0) {
      listCart.map((p) =>
        p.id === prd.id
          ? dispatch(changeCart([...newListCart]))
          : dispatch(
              changeCart([
                ...listCart,
                {
                  ...props.product,
                  stock: props.product.stock - quantity,
                  order: quantity,
                },
              ])
            )
      );
    } else {
      dispatch(
        changeCart([
          ...listCart,
          {
            ...props.product,
            stock: props.product.stock - quantity,
            order: quantity,
          },
        ])
      );
    }
  };

  return (
    <div>
      <div className="addtocart">
        <div className="d-flex price">
          <span>EGP</span>
          <h3 className=" fw-bold">{props.price}0</h3>
          <span>00</span>
        </div>
        <div>
          <span className="free">FREE Returns </span>
          <i className="fa-solid fa-chevron-down  "></i>
        </div>
        <div>
          <div>
            <span className="free"> FREE delivery </span>
            <span className="fw-bold">Monday, 5 June</span>
          </div>
          <div>
            <span>Or fastest delivery </span>
            <span className="fw-bold">Tomorrow, 4 June.</span>
            <span> within 13 hrs 31 mins</span>
          </div>
          <>
            <GrLocation />
            <span style={{ fontSize: "12px", color: "#007185" }}>
              Derlivar to Egypt
            </span>
          </>
          <div className="d-flex align-items-center">
            <span>Qty:</span>
            <Form.Select
              onChange={(e) => {
                changeQuantity(e);
              }}
              className="py-1 ms-1 "
              style={{ width: "68px" }}
              aria-label="Default select example"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </div>
          <div>
            <Button
              className="w-100 my-2 btn-addcart"
              onClick={() => {
                addToCard(product);
              }}
            >
              Add to Cart
            </Button>{" "}
            <Button className="btn-bynow w-100 mb-2">Buy Now</Button>{" "}
          </div>

          <div className="table">
            <div>
              <span className="me-2">Payment</span>
              <span className="color-main">Secure transactior</span>
            </div>
            <div>
              <span className="me-1">Fulfilled by</span>
              <span>Amazon</span>
            </div>
            <div>
              <span className="me-3">Sold by </span>
              <span className="color-main">BrothersComputer.Market</span>
            </div>
          </div>
          <Card className="">
            <Form.Check
              inline
              label="Yes, I want FREE Delivery"
              name="group1"
            />
            <Card.Text className="p-2 text-center fw-bold">
              Enjoy FREE & FAST delivery with{" "}
              <span className="color-main">Amazon Prime</span>
            </Card.Text>
            <img src="https://m.media-amazon.com/images/G/42/marketing/prime/amazonprime_hybridMidnightBlue_SA._CB646594257_.png" />
          </Card>
          <button className="btn  w-100 mt-2 add-list">Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
