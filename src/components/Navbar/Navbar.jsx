import React, { useContext, useState } from "react";
import "./style.css";
import imgNav from "../../assets/images/XCM_Manual_1550677_5471696_400x39_2X._CB592483028_.jpg";
import flagImg from "../../assets/images/egypt.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { langContext } from "../../context/lang";
export default function Navbar() {
  var {lang}=   useContext(langContext)

  const { t } = useTranslation();
  const[sta,setsta]= useState({
    xall:-29,
    yall:-29,
    xmark:101,
    ymark:1

  })
 
  const handleall=()=>{
    if(lang =='en'){
      setsta({
        yall:-29,
        xall:0,
        xmark:101,

      })
      
    }
    else{
      setsta({
        xall:76,
        yall:110,
        ymark:-8  
          })  
    }
  }
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const [menu, setMenu] = useState(false);

 async function handelMenu() {
     handleall()
   await delay(500);
     setMenu(!menu);

  }
  return (
    <>
      <div>
        <div className="navBar">
          <ul className="links">
            <li className="all" onClick={handelMenu} >
              <i className="fa-solid fa-bars" /> {t('All')}
            </li>
            <li>
              <Link to="/">{t('Home')}</Link>
            </li>
            <li>
              <Link to="/laptops">{t('laptops')}</Link>
            </li>
            <li>
              <Link to="/womens-jewellery">{t('Jewelry')}</Link>
            </li>
            <li>
              <Link to="/sunglasses">{t('sunglasses')}</Link>
            </li>
            <li>
              <Link to="/mens-shoes">{t('shoes')}</Link>
            </li>
            <li>
              <Link to="/mens-shirts">{t('shirts')}</Link>
            </li>
            <li>
              <Link to="/womens-dresses">{t('dresses')}</Link>
            </li>
            <li>
              <Link to="/lighting">{t('lighting')}</Link>
            </li>
            <li>
              <Link to="/smartphones">{t('mobiles')}</Link>
            </li>
          </ul>
          <img className="img" src={imgNav} alt=""/>
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
                {t('Hello')}{" "}
                <Link href="./Sign/Sign.html" id="signUser">
                {t('sign')}
                </Link>
              </h3>
            </div>
          </div>
          <div className="trending">
            <h4>{t('Trending')}</h4>
            <div>{t('Bestselling')}</div>
            <div>{t('NewReleases')}</div>
            <div>{t('Movers')} &amp;{t('Sharks')} </div>
          </div>
          <div className="digital">
            <h4>{t('Digital')}</h4>
            <div
              className="d-flex align-items-center justify-content-between"
            >
              <span>{t('AmazonKindle')} </span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </div>
          </div>
          <div className="shop">
            <h4>{t('ShopByCategory')}</h4>
            <Link href="./Cart & Pages/electronics.html">
              <span>{t('Electronics')}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/jewelery.html">
              <span>{t('Jewelry')}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/man.html">
              <span>{t('Menclothing')}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/women.html">
              <span>{t('Womenclothing')}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
          </div>
          <div className="help">
            <h4>{t('Help')} &amp; {t('Settings')}</h4>
            <Link href="./Sign/Sign.html">{t('YourAccount')}</Link>
            <div>
              <i className="fa-solid fa-earth-americas" /> {t('English')}
            </div>
            <div
              className="d-flex align-items-center "

            >
              <img src={flagImg} style={{ width: "20px" }} alt=""/>
              <span style={{ marginLeft: "5px" }}>Egypt</span>
            </div>
          </div>
        </div>
      </div>
      {/* start overlay */}
      <div>
        <div
          className="layout"
          style={{ display: menu ? "block" : "none"  }}
          onClick={() => setMenu(false)}
        />
        <div className="menu" style={{ left: menu ? `${sta.xall}%` : `${sta.yall}%` ,transition:menu ?'1s':'0.0001s'}}>
          <span className="x-mark" 
          style={{display:menu?'block':'none', left: menu ? `${sta.xmark}%` : `${sta.ymark}%`}}
           onClick={() => setMenu(false)}>
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
                {t('Hello')}{" "}
                <Link href="./Sign/Sign.html" id="signUser">
                {t('sign')} 
                </Link>
              </h3>
            </div>
          </div>
          <div className="trending">
          <h4>{t('Trending')}</h4>
            <div>{t('Bestselling')}</div>
            <div>{t('NewReleases')}</div>
            <div>{t('Movers')} &amp;{t('Sharks')} </div>
          </div>
          <div className="digital">
          <h4>{t('Digital')}</h4>
           
        
            <div
              className="d-flex align-items-center justify-content-between"

            >
              <span>{t('AmazonKindle')} </span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </div>
          </div>
          <div className="shop">
            <h4>{t('ShopByCategory')}</h4>
            <Link to="/laptops">
              <span>{t('Electronics')}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link to="/womens-jewellery">
              <span>{t('Jewelry')}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link to="/mens-shirts">
              <span>{t('Menclothing')}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link to="/womens-dresses">
              <span>{t('Womenclothing')}</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
          </div>
          <div className="help">
            <h4>{t('Help')} &amp; {t('Settings')}</h4>
            <Link to="sign">{t('YourAccount')}</Link>
            <div>
              <i className="fa-solid fa-earth-americas me-2" />{t('English')} 
            </div>
            <div
              className="d-flex align-items-center justify-content-between"
            >
              <img src={flagImg} style={{ width: "20px" }} alt=""/>
              <span style={{ marginLeft: "5px" }}>{t('Egypt')}</span>
            </div>
            <div
              className="d-flex align-items-center justify-content-between p-3"
            >
              <span style={{ marginLeft: "5px" }}>{t('Sign Out')}</span>
            </div>
          </div>
        </div>
      </div>
      {/* End overlay */}
    </>
  );
}