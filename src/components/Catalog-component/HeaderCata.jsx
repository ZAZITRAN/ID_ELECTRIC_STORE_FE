import "./headercata.scss"
import { useParams } from "react-router-dom";
function Header(pros) {
let {id} = useParams()
console.log(id);
    return ( 
        <>
  <header className="header">
    <div className="header__left">
      <img src="/imgHome/instagram.png" alt="" className="header-img" />
      <img src="/imgHome/facebook.png" alt="" className="header-img" />
      <img src="/imgHome/Twitter.png" alt="" className="header-img" />
      <img src="/imgHome/Linkedin.png" alt="" className="header-img" />
    </div>
    <div className="header__right">
      <div className="header-right o">
        <img src="/imgHome/Call.png" alt="" className="header-img" />
        <div className="header-right-text">+12 345 6789 0</div>
      </div>
      <div className="header-right t">
        <img src="/imgHome/Emailred.png" alt="" className="header-img" />
        <div className="header-right-text">support@tronix.com</div>
      </div>

      <div className="header-right t">
        <img src="/imgHome/User.png" alt="" className="header-img" />
        <div className="header-right-text">Account</div>
      </div>

    </div>
  </header>
  <div className="h__">
    <img src="/imgHome/Tronix.png" alt="" className="logo" />

    <div className="list-btn-dieuhuong cc">
    <div className="list-con home">Home</div>
    <div className="list-con about">About</div>
    <div className="list-con product">Product</div>
    <div className="list-con blog">Blog</div>
    <div className="list-con contact">Contact</div>
  </div>



    <div className="h-center cc">
      <div className="center-input">
        <input id="center-input" type="text" placeholder="Search here" />
        <div className="btn-seach">
          <img className="img-search" src="/imgHome/Search.png" alt="" />
        </div>
      </div>
    </div>
    <div className="h-right cc">
      <div className="bao-img1">
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="bao-img2" data-shopping="10">
        <img id="contentgio" src="/imgHome/Shopping Bag.png" alt="" />
      </div>
      <div className="bao-img3"  data-email="0">
        <img id="contentemail" src="/imgHome/Email.png" alt="" />
      </div>



    </div>
  </div>

  <div className="chuyenPage">
    <div className="chuyenPage__home">Home</div>
    <div className="chuyenPage__arrow"><i className="fa-solid fa-angle-right"></i></div>
    <div className="chuyenPage__allcata">{ pros.textBlog == 'Blog' ? pros.textBlog : 'All Catagories'}</div>
    
    
  </div>

</>

     );
}

export default Header;