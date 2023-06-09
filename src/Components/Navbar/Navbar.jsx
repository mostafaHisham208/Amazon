import React, { useState } from "react";
import "./style.css";
import imgNav from "../../assets/images/XCM_Manual_1550677_5471696_400x39_2X._CB592483028_.jpg";
import flagImg from "../../assets/images/egypt.png";
export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function handelMenu() {
    setMenu(!menu);
  }
  return (
    <>
      <div>
        <div className="navBar">
          <ul className="links">
            <li className="all" onClick={handelMenu}>
              <i className="fa-solid fa-bars" /> All
            </li>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./Cart & Pages/electronics.html">Electronics</a>
            </li>
            <li>
              <a href="./Cart & Pages/jewelery.html">Jewelry</a>
            </li>
            <li>
              <a href="./Cart & Pages/man.html">men's clothing</a>
            </li>
            <li>
              <a href="./Cart & Pages/women.html">women's clothing</a>
            </li>
          </ul>
          <img className="img" src={imgNav} />
          <div className="mobile-screen">
            <div className="show-icons">
              <a href="./index.html">
                <i className="fa-solid fa-house" />
              </a>
              <a href="./Sign/Sign.html">
                <i className="fa-solid fa-user" />
              </a>
              <a href="./Cart & Pages/card.html">
                <i className="fa-solid fa-cart-shopping" />
              </a>
            </div>
          </div>
        </div>
        <div className="layout" />
        <div className="menu">
          <span className="x-mark">
            <i
              className="fa-solid fa-xmark fa-2xl"
              style={{ color: "white" }}
            />
          </span>
          <div className="header">
            <div className="info">
              <h3 className="heading">
                <span>
                  <i className="fa-solid fa-circle-user" />{" "}
                </span>
                Hello,{" "}
                <a href="./Sign/Sign.html" id="signUser">
                  sign in
                </a>
              </h3>
            </div>
          </div>
          <div className="trending">
            <h4>Trending</h4>
            <div>Best selling</div>
            <div>New Releases</div>
            <div>Movers &amp; Sharks</div>
          </div>
          <div className="digital">
            <h4>Digital Content And Devices</h4>
            <div
              style={{
                display: "flex",
                "-webkit-box-pack": "space-between",
                "-webkit-justify-content": "space-between",
                "-ms-flex-pack": "space-between",
                "justify-content": "space-between",
                "-webkit-align-items": "center",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
              }}
            >
              <span>Amazon Kindle E-readers</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </div>
          </div>
          <div className="shop">
            <h4>Shop By Category</h4>
            <a href="./Cart & Pages/electronics.html">
              <span>Electronics</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </a>
            <a href="./Cart & Pages/jewelery.html">
              <span>Jewelry</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </a>
            <a href="./Cart & Pages/man.html">
              <span>Men's clothing</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </a>
            <a href="./Cart & Pages/women.html">
              <span>Women's clothing</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </a>
          </div>
          <div className="help">
            <h4>Help &amp; Settings</h4>
            <a href="./Sign/Sign.html">Your Account</a>
            <div>
              <i className="fa-solid fa-earth-americas" /> English
            </div>
            <div
              style={{
                display: "flex",
                "-webkit-align-items": "center",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
              }}
            >
              <img src={flagImg} style={{ width: "20px" }} />
              <span style={{ "margin-left": "5px" }}>Egypt</span>
            </div>
          </div>
        </div>
      </div>
      {/* start overlay */}
      <div>
        <div className="layout" style={{display:menu?"block":"none"}} onClick={() => setMenu(false)}/>
        <div className="menu" style={{left:menu?"0":"-400px"}}>
          <span className="x-mark" onClick={() => setMenu(false)}>
            <i
              className="fa-solid fa-xmark fa-2xl"
              style={{ color: "white" }}
            />
          </span>
          <div className="header">
            <div className="info">
              <h3 className="heading">
                <span>
                  <i className="fa-solid fa-circle-user" />{" "}
                </span>
                Hello,{" "}
                <a href="./Sign/Sign.html" id="signUser">
                  sign in
                </a>
              </h3>
            </div>
          </div>
          <div className="trending">
            <h4>Trending</h4>
            <div>Best selling</div>
            <div>New Releases</div>
            <div>Movers &amp; Sharks</div>
          </div>
          <div className="digital">
            <h4>Digital Content And Devices</h4>
            <div
              style={{
                display: "flex",
                "-webkit-box-pack": "space-between",
                "-webkit-justify-content": "space-between",
                "-ms-flex-pack": "space-between",
                "justify-content": "space-between",
                "-webkit-align-items": "center",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
              }}
            >
              <span>Amazon Kindle E-readers</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </div>
          </div>
          <div className="shop">
            <h4>Shop By Category</h4>
            <a href="./Cart & Pages/electronics.html">
              <span>Electronics</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </a>
            <a href="./Cart & Pages/jewelery.html">
              <span>Jewelry</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </a>
            <a href="./Cart & Pages/man.html">
              <span>Men's clothing</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </a>
            <a href="./Cart & Pages/women.html">
              <span>Women's clothing</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </a>
          </div>
          <div className="help">
            <h4>Help &amp; Settings</h4>
            <a href="./Sign/Sign.html">Your Account</a>
            <div>
              <i className="fa-solid fa-earth-americas" /> English
            </div>
            <div
              style={{
                display: "flex",
                "-webkit-align-items": "center",
                "-webkit-box-align": "center",
                "-ms-flex-align": "center",
                "align-items": "center",
              }}
            >
              <img src={flagImg} style={{ width: "20px" }} />
              <span style={{ "margin-left": "5px" }}>Egypt</span>
            </div>
          </div>
        </div>
      </div>
      {/* End overlay */}
    </>
  );
}
