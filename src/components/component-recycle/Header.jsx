import "./header.scss"
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import React, {useEffect} from "react";
function Header() {
  let dispatch=useDispatch()
  useEffect(()=>{
      
      axios.get("http://localhost:3000/cart")
      .then( res=>{
        
          dispatch({type:"save-cart",payload:res.data})
      })
      .catch((err)=>console.log(err));
  },[]) 
  let cart=useSelector((state)=>state.cart);
  console.log(cart);
  let total=0
  for (let i = 0; i < cart.length; i++) {
    total=total+cart[i].quantity
    console.log(typeof cart[i].quantity );
  }
    return ( 
        <>
        {total}
  <header className="header">
    <div className="header__left">
      <img src="/imgHome/instagram.png" alt="" className="header-img" />
      <img src="/imgHome/facebook.png" alt="" className="header-img" />
      <img src="/imgHome/Twitter.png" alt="" className="header-img" />
      <img src="/imgHome/Linkedin.png" alt="" className="header-img" />
    </div>
    <div className="header__right">
      <div className="header-right o">
        <img src="imgHome/Call.png" alt="" className="header-img" />
        <div className="header-right-text">+12 345 6789 0</div>
      </div>
      <div className="header-right t">
        <img src="/imgHome/Emailred.png" alt="" className="header-img" />
        <div className="header-right-text">support@tronix.com</div>
      </div>
    </div>
  </header>
  <div className="h__">
    <img src="/imgHome/Tronix.png" alt="" className="logo" />
    <div className="h-center">
      <img className="img1" src="imgHome/search (1).png" alt="" />
      <div className="center-input">
        <input id="center-input" type="text" placeholder="Search here" />
        <div className="btn-seach">
          <img className="img-search" src="imgHome/Search.png" alt="" />
        </div>
      </div>
    </div>
    <div className="h-right">
      <div className="bao-img1">
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="bao-img2" data-shopping="10">
        <img id="contentgio" src="/imgHome/Shopping Bag.png" alt="" />
      </div>
      <div className="bao-img3"  data-email="0">
        <img id="contentemail" src="/imgHome/Email.png" alt="" />
      </div>
      <a href="" className="signin">
        Sign In
      </a>
      <div className="signup">Sign Up</div>
    </div>
  </div>
  <div className="list-btn-dieuhuong">
    <div className="list-con home">Home</div>
    <div className="list-con about">About</div>
    <div className="list-con product">Product</div>
    <div className="list-con blog">Blog</div>
    <div className="list-con contact">Contact</div>
  </div>
</>

     );
}

export default Header;