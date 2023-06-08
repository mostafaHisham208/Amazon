import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
const Product = (props) => {
  let navigate = useNavigate();
  return (
    <div className="row  justify-lg-content-between product">
      {props.fillterProducts.length >= 1 && (
        <h5 className="fw-bold">Results</h5>
      )}
      {props.products.map((lap) => {
        let price = lap.price.toString().split("");
        price.splice(2, 0, ",");
        return (
          <div
            key={lap.id}
            className="col-12 col-sm-6 col-xl-4 mb-2 "
            onClick={() => {
              navigate(`/details/${lap.id}`);
            }}
          >
            <Card
              style={{ maxWidth: "19rem", height: props.heightCart }}
              className="m-auto"
            >
              <Card.Img
                variant="top"
                src={lap.thumbnail}
                height="300px"
                alt="not found"
              />
              <Card.Body>
                <Card.Text className="mb-0">{lap.description}</Card.Text>
                <div className="rate">
                  <div className="iconstar">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-chevron-down "></i>
                    <span className="rate-number">{lap.rating}</span>
                  </div>
                </div>
                <div className="d-flex">
                  <span>EGP</span>
                  <h3 className=" fw-bold">{price}0</h3>
                  <span>00</span>
                </div>
                <Card.Text>
                  Get it as soon as{" "}
                  <span className="text-tomorrow">tomorrow</span> Fulfilled by
                  Amazon - FREE Shipping
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
