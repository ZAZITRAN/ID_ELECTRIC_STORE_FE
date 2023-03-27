import React , {useEffect , useState} from "react";
import "./slide.scss"

function Slide() {
  let arr = [
    "https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283",
    "https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283",
    "https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283",
    "https://firebasestorage.googleapis.com/v0/b/uploadimg-a9a88.appspot.com/o/image%2Fimgbnb%20(4).jpeg?alt=media&token=a98bf1fa-c525-4841-a5b2-4fed3e909283",

  ]
  const [data , setData] = useState(arr)
  const [run1 , setRun] = useState(0)

  useEffect(()=>{
     const timer =  setInterval(() => {
    if (run1 < data.length * 100 - 100) {
      
      setRun(prve => {
        if (prve < data.length * 100 - 100) {
          return prve + 100
        }else{
          prve = 0
          return prve 

        }
        
      })
      
    }
  }, 5000);
  return () => clearInterval(timer)
  }, [])

    function handlelui() {
      if (run1 > 0) {
        setRun(run1 - 100)
        
      }else{
        setRun(data.length * 100 - 100)
      }
    }
    function handletien() {
      if (run1 < data.length * 100 - 100) {
        setRun(run1 + 100)

        
      }else{
        setRun(0)
      }
    }
    return ( 
        <>
      <div className="slide-container">

       <div className="btn-cha">

       <div onClick={()=> handlelui()} className="slide-btn left">
       <i className="fa-solid fa-chevron-left"></i>
       </div>

    <div onClick={()=> handletien()} className="slide-btn right">
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
        <div className="slide-run"
        style={{ transform: `translateX(-${run1}%)`, cursor:"pointer" }}
         >
          { data.map((item , index)=>{
              return (
                     <img key={index} src={item} alt="" />
                
              )
            })
          }

        </div>
      </div>
  </div>


 




  <div className="category">

    <div className="category__text">Category</div>

    <div className="category__list">

      <div className="category__sun">
            <img src="/imgSlide/Laptop.png" alt="" />
          <div className="sun-text">Computer Laptop</div>
      </div>
      <div className="category__sun">
            <img src="/imgSlide/Smartphone.png" alt="" />
          <div className="sun-text">Mobile & Tablet</div>
      </div>
      <div className="category__sun">
            <img src="/imgSlide/Camera.png" alt="" />
          <div className="sun-text">Camera</div>
      </div>
      <div className="category__sun">
            <img src="/imgSlide/Tv And Remote.png" alt="" />
          <div className="sun-text">TV & Smart Box</div>
      </div>
      <div className="category__sun">
            <img src="/imgSlide/Air Conditioner.png" alt="" />
          <div className="sun-text">Home Appliance</div>
      </div>
      <div className="category__sun">
            <img src="/imgSlide/Speaker.png" alt="" />
          <div className="sun-text">Accessories</div>
      </div>
      <div className="category__sun">
            <img src="/imgSlide/Gamepad.png" alt="" />
          <div className="sun-text">Other Categories
</div>
      </div>
      
          
    </div>
    </div>
        </>
     );
}

export default Slide;