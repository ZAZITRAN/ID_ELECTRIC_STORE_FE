import React from "react";
import "./slide.scss"

function Slide() {
    
    return ( 
        <>
      <div className="slide-container">

       <div className="btn-cha">

       <div className="slide-btn left">
       <i className="fa-solid fa-chevron-left"></i>
       </div>

    <div className="slide-btn right">
      <i className="fa-solid fa-chevron-right"></i>
      </div>

      </div>

      <div className="slide-show">

           <div className="current-img">
          <div className="current-img cr"></div>
          <div className="current-img"></div>
          <div className="current-img"></div>
          <div className="current-img"></div>
        </div>
        <div className="slide-run" >
           <img src="https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283" alt="" />
           <img src="https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283" alt="" />
           <img src="https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283" alt="" />
           <img src="https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283" alt="" />

        </div>
      </div>
  </div>


 




  <div className="category">

    <div className="category__text">Category</div>

    <div className="category__list">

      <div className="category__sun">
            
          <div className="sun-text">Computer Laptop</div>
      </div>
          
    </div>
    </div>
        </>
     );
}

export default Slide;