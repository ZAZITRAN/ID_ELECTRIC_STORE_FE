import React from "react";
import "./slide.scss"

function Slide() {
    
    return ( 
        <>
      <div class="slide-container">

       <div class="btn-cha">

       <div class="slide-btn left">
       <i class="fa-solid fa-chevron-left"></i>
       </div>

    <div class="slide-btn right">
      <i class="fa-solid fa-chevron-right"></i>
      </div>

      </div>

      <div class="slide-show">

           <div class="current-img">
          <div class="current-img cr"></div>
          <div class="current-img"></div>
          <div class="current-img"></div>
          <div class="current-img"></div>
        </div>
        <div class="slide-run" >
           <img src="https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283" alt="" />
           <img src="https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283" alt="" />
           <img src="https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283" alt="" />
           <img src="https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283" alt="" />

        </div>
      </div>
  </div>


 




  <div class="category">

    <div class="category__text">Category</div>

    <div class="category__list">

      <div class="category__sun">
            
          <div class="sun-text">Computer Laptop</div>
      </div>
          
    </div>
    </div>
        </>
     );
}

export default Slide;