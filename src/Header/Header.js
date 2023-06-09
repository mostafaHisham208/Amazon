import React, { useState } from 'react';

import "./Header.css"
import axios from 'axios';
import { NavLink } from 'react-bootstrap';
import { useRef } from 'react';
import { useEffect } from 'react';
export default function Header() {
  //  var showsign=false
  const [signInisShown, setsignInIsShown] = useState(false);
  const [langisShown, setlangisShown] = useState(false);
  const [searchIsShown, setSearchIsShown] = useState(false);
  const [query, setquery] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  // useEffect(()=>{
  //   document.addEventListener("click",handleclickOutSearch,true)
  // })


  const ref = useRef(null);
  const { onClickOutside } = "hello";

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       onClickOutside && onClickOutside();
  //     }
  //   };
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, [ onClickOutside ]);

  // if(!props.show)
  //   return null;

  const search = () => {
    if (query == '') {
      console.log("nothing to show");
    }
    else {
      axios.get(`https://dummyjson.com/products/search?q=${query}`)
        .then(res => {
          setResultSearch(res.data.products);
          // console.log(res.data.products);
        }).catch(err => console.log(err))
    }
  }
  const handlesearch = (e) => {
    if (e.target.value == '') {
      setquery(e.target.value);
      setResultSearch([])
      search();

    }
    else {
      setquery(e.target.value);
      search();
    }


  }
  useEffect(() => {

  }, [resultSearch])

  var language = true
  const change = () => {
    language = !language;
  }
  const changSearchblock = (e) => {
    e.target.style.display = "block"
  }

  return (<>
    <div className="container-fliud" dir={language ? 'ltr' : 'rtl'}>
      <nav className="navheader">
        <div id="left-nav">
          <div 
          style={{width:"45%", height:"70%"}}
          >
          <a href="/index.html" className="px-2">
            <img src="./assets/images/Amazon-Emblem.jpg" alt="logo" width="80%" height="80%" />
          </a>
          </div>
          <div className='locationdiv' 
          // style={{width:"40%", height:"90%"}}
          >
          <a href="/" >
            <div className=" d-flex  flex-norap" style={{ display: "flex", flexWrap: "nowrap", margin: "3px" }} >
              <div className="col-4 p-0 d-flex align-items-end" style={{ display: "flex", alignItems: "end", width: "30%", padding: "0 0 0 0" }} >
                <img src="./assets/images/location.png" width="95%" height="70%" alt="logo" />
              </div>
              <div className="col-7px-0" style={{ paddingRight: "2px" }}>
                <div className="heder-text-style m-0 p-0"  >Deliver to  </div>
                <div className="heder-text-style m-0 p-0 pe-2" style={{ fontWeight: "bold" }}>Egypt</div>
              </div>
            </div>
          </a>
          </div>
        </div>
        <div id="mobilediv">
          <a className='mobile-signinIcon' href="/"><span>sign in</span></a>
          <i className="usericon  fa-solid fa-user"></i>
          <a href="./Cart & Pages/card.html"><img src="./assets/images/cart.png" alt='' /></a>
        </div>
        <div className="navsearch">
          <button className="book">All </button>
          <input id="searchInput" type="search" style={{ paddingLeft: "2%" }} onChange={handlesearch}
            value={query} name="search" autoComplete='off'
            placeholder=" Search Amazon" data-search onFocus={() => setSearchIsShown(true)}
            onBlur={() => setSearchIsShown(false)} />
          <button className="search" type="submit" onClick={search}>
            <img src="./assets/images/search.png" width="50%" alt="" />
          </button>
        </div>

        <div id="logo3" >
          <button type="button" className="btn btn-secondary w-100 h-100" style={{ backgroundColor: "gray", width: "98%", height: "100%" }}>
            <div className='d-flex' style={{ display: "flex" }}>
              <div className="row"> <img src="./assets/images/location.png" width="100%"
                height="40%" alt="logo" style={{ verticalAlign: "inherit" }} /></div>
              <div > Deliver to Egypt </div>
            </div></button>

        </div>
        <div id="right-nav">
          <ul>
            <li style={{ width: "15%" }} onMouseEnter={() => setlangisShown(true)} onMouseLeave={() => setlangisShown(false)}>
              <a className="langarrow" href="/" style={{ alignItems: "end" }} >
                <img src="./assets/images/downloadlan.png" alt="" />
                <div >
                  <span id="spanarrow" className='pe-1'>EN</span>
                </div>
              </a></li>
            <li style={{ width: "30%" }} onMouseEnter={() => setsignInIsShown(true)} onMouseLeave={() => setsignInIsShown(false)}>
              <a href="/" id="signinarrow" >
                <div>sign in</div>
                <span id="signarrow">Account&Lists</span>
              </a></li>
            <li><a href="/">
              <div>Returns</div>
              <span>&Orders</span>
            </a></li>

            <li><a href="./Cart & Pages/card.html" className='d-flex'>
              <img src="./assets/images/cart3.png" alt='' className='navCartImage' />
              <span style={{ paddingTop: "8%", fontSize: "1.1vw" }}>cart</span>
              <div className='cartItemNum'>0</div>
            </a></li>

          </ul>
        </div>

      </nav>
    </div>
    {langisShown && (<> <span id="spanlang" onMouseEnter={() => setlangisShown(true)} onMouseLeave={() => setlangisShown(false)}></span>
      <div id="divlangitem" onMouseEnter={() => setlangisShown(true)} onMouseLeave={() => setlangisShown(false)}>
        <div className="langselect">change language <a href="/" style={{ fontSize: "0.8vw" }}>learn more</a> </div>
        <div className="langselect">
          <input className="form-check-input m-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
          <label >english - EN</label>
        </div>
        <hr />
        <div className="langselect">
          <input className="form-check-input m-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={change} />
          <label >العربية -AR</label>
        </div>

        <hr />
        <div>
          Change currency <a href="/">Learn more</a>
        </div>
        <div>$ - USD - US Dollar</div>
      </div>
    </>)}
    {signInisShown && (<>  <span id="div-sign-arrow" onMouseEnter={() => setsignInIsShown(true)} onMouseLeave={() => setsignInIsShown(false)}></span>
      <div id="div-sign-tem" onMouseEnter={() => setsignInIsShown(true)} onMouseLeave={() => setsignInIsShown(false)} >
        <div className="row d-flex justify-content-center flex-row flex-wrap m-0" 
        // style={{display:"flex",justifyContent:"center",flexWrap:"wrap",flexDirection:"row" }}
        >
          <div className="col-10 d-flex justify-content-center " 
          // style={{display:"flex",justifyContent:"center" ,width:"80%" }}
          >
            <button type="button" className="btn btn-warning w-50 mt-3 " style={{ backgroundColor:"yellow", cursor: "pointer" ,width:"50%", marginTop:"15px"}}><a
              href="./Sign/Sign.html">sign in</a> </button>
          </div>
          <div className="col-10 justify-content-center border-bottom py-2 d-flex" 
          // style={{display:"flex",justifyContent:"center" ,width:"80%", fontSize: "0.9vw",borderBottom:"1px solid gray"}}
          >   New
            customer?<a href="./Registration/Registertion.html" className="px-2 text-decoration-none"> Start here.</a> </div>
        </div>
        <div className="row pt-2" style={{display:"flex" }} >
          <div className="col-6 border-end" id="listofsign" style={{width:"50%"}}>
            <h5>your lists</h5>
            <div><a href="/"> Create a List</a></div>
            <div><a href="/">Find a List or Registry</a></div>
          </div>
          <div className="col-6 " id="listofsign" style={{width:"50%"}}>
            <h5>your account</h5>
            <div> <a href="/">AccountOrders</a> </div>
            <div> <a href="/">Recommendations</a> </div>
            <div> <a href="/">Browsing History</a> </div>
            <div> <a href="/">Watchlist</a> </div>
            <div> <a href="/">Video Purchases & Rentals </a> </div>
            <div> <a href="/">Kindle Unlimited</a> </div>
            <div> <a href="/">Content & Devices</a> </div>
            <div> <a href="/">Subscribe & Save Items</a> </div>
            <div> <a href="/">Memberships & Subscriptions</a> </div>
            <div> <a href="/">Music Library </a> </div>
          </div>
        </div>
      </div>
    </>)}

    {searchIsShown && (<>
      <div id="searchResults"
        // ref={ref} 
        onFocus={() => { setSearchIsShown(true) }}
      //  onMouseEnter={changSearchblock} 
      //  onBlur={() => setSearchIsShown(false)} 
      > {resultSearch.map((res) => {
        return (
          <div className='list' onClick={() => { console.log(res.category) }} key={res.id} >
            <div className='imgsearch'>
              <img className='m-1' src={res.images[0]} alt='' width={"70%"} height={"70%"} />

            </div>
            <div className='m-0 p-0'>
              <h6 className='m-0 p-0'>{res.title}</h6>
              <p className='m-0 p-0'>{res.category}</p>

            </div>
          </div>


        )
      }
      )}
      </div>
    </>


    )
    }

  </>
  );
}


