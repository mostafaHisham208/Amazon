import React from 'react'
import "./Header.css"
export default function Header() {




  return (
       <>
        <div className="container-fliud">
        <nav className="navheader">
            <div id="logo">
                <a href="/index.html" className="logo px-2">
                    <img src="./assets/images/Amazon-Emblem.jpg" alt="logo" width="100%" height="100%"/>
                </a>
            </div>
            <div id="logo2">
                
                <a href="/"  id="loc">
                    <div className="d-flex  flex-norap" >
                        <div className="col-4 p-0 d-flex align-items-end">
                            <img src="./assets/images/location.png" width="90%" height="60%" alt="logo"/>
                        </div>
                        <div className="col-7 px-0">
                            <div className="heder-text-style m-0 p-0" >Deliver to  </div>
                            <div className="heder-text-style m-0 p-0 pe-2" >Egypt</div>
                        </div>
                    </div>
                </a>  
            </div>
            <div id="mobilediv">
                 <a href="/"><span>sign in</span></a> 
                 <i className="fa-solid fa-user"></i>
                  <a href="./Cart & Pages/card.html"><img src="./assets/images/cart.png" alt=''/></a>
                </div>
            <div id="divsearch">
                <button className="book">All<span className="nav-icon nav-arrow" style={{visibility: "visible"}}></span></button>
                <input id="searchInput" type="search" autocomplete="off" style={{ paddingLeft: "2%"}}
                    onfocus="getSearchDiv()" onkeydown="keyarrow(event)" placeholder=" Search Amazon" data-search/>
                <button className="search" type="submit">
                    <img src="./assets/images/search.png" width="50%" alt=""/>
                </button>
            </div>
            <div id="logo3">
                <button type="button" className="btn btn-secondary w-100 h-100">
                <div className='d-flex'>
                    <div className="row"> <img src="./assets/images/location.png" width="100%"
                        height="40%" alt="logo" style={{verticalAlign:"inherit"}}/></div>
                    <div > Deliver to Egypt </div>    
                </div></button>
               
            </div>
            <div id="div11">
                <ul>
                    <li style={{width:"15%"}}>
                        <a className="langarrow" href="/" style={{alignItems: "end"}}  onmouseover={"showlangitem"}onmouseout="hidelangitem()">
                            <img src="./assets/images/downloadlan.png" alt=""/>
                            <div >
                                <span id="spanarrow" className='pt-0'>EN</span>
                                <span id="spanlang" onmouseover="showlangitem()" onmouseout="hidelangitem()"></span>
                            </div>
                        </a></li>
                    <li className='w-25'>
                        <a href="/" id="signinarrow" onmouseover="showSignInDiv()" onmouseout="hideSignInDiv()">
                            <div>sign in</div>
                             <span id="signarrow">Account&Lists</span>
                        </a></li>
                    <li><a href="/">
                            <div>Returns</div>
                            <span>&Orders</span>
                        </a></li>

                    <li><a href="./Cart & Pages/card.html"className='d-flex'>
                            <img src="./assets/images/cart.png" alt=''
                                style={{fontSize:"1vw ", width: "40%",  padding: "4% 0 0 0"}} />
                            <span style={{paddingTop: "8%", fontSize: "1.4vw"}}>cart</span>
                        </a></li>

                </ul>
            </div>

        </nav>
    </div>

    <div id="divlangitem" onmouseover="showlangitem()" onmouseout="hidelangitem()">
        <div className="langselect">change language <a href="/" style={{fontSize: "0.8vw"}}>learn more</a> </div>
        <div className="langselect">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
            <label for="">english - EN</label>
        </div>
        <hr/>
        <div className="langselect">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label for="">العربية -AR</label>
        </div>
        <div className="langselect">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label for="">franca -FR</label>

        </div>
        <div className="langselect">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label for="">Deutsch -DE</label>
        </div>
        <div className="langselect">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label for="">trukch -TR</label>
        </div>
        <div className="langselect">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label for="">עברית - HE</label>
        </div>
        <hr/>
        <div>
            Change currency <a href="/">Learn more</a>
        </div>
        <div>$ - USD - US Dollar</div>
    </div>
    <div id="div-sign-tem" onmouseover="showSignInDiv()" onmouseout="hideSignInDiv()">
        <div className="row d-flex justify-content-center flex-row flex-wrap m-0">
            <div className="col-10 d-flex justify-content-center " >
                <button type="button" className="btn btn-warning w-50 mt-3 " style={{cursor: "pointer"}}><a
                        href="./Sign/Sign.html">sign in</a> </button>
            </div>
            <div className="col-10 justify-content-center border-bottom py-2 d-flex" style={{fontSize: "0.9vw"}}> New
                customer?<a href="./Registration/Registertion.html" className=" px-2 text-decoration-none"> Start
                    here.</a> </div>
        </div>
        <div className="row pt-2">
            <div className="col-6 border-end" id="listofsign">
                <h5>your lists</h5>
                <div><a href="/"> Create a List</a></div>
                <div><a href="/">Find a List or Registry</a></div>
            </div>
            <div className="col-6 " id="listofsign">
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
    <span id="div-sign-arrow" onmouseover="showSignInDiv()" onmouseout="hideSignInDiv()"></span>
    <div id="div22" onclick="getSearchDiv()">
        <ul id="list"></ul>
    </div>
       
       </>
)
}
