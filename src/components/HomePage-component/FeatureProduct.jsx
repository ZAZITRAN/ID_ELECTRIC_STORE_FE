import "./feature.scss"
import React , {useState , useEffect}from 'react'
function FeatureProduct() {
  let arr = [
    {name:"Smartphone 5G" , importPrice:"$299" , productimg:""},
    {name:"Smartphone 5G" , importPrice:"$299" , productimg:""},
    {name:"Smartphone 5G" , importPrice:"$299" , productimg:""},
] 

  const [listsp , setListsp] = useState(arr)
    return ( 
       
        <>
           <div className="feature">
            <div className="feature__textto">Featured Products</div>
            <div className="feature__textnho">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </div>
            <div className="feature__listsp">

                <div className="feature__spto">
                    <div className="text-spto">{listsp[0].name}</div>
                    <div className="spto-img">
                    <img src={listsp[0].productimg} alt="" />

                    </div>
                    <div className="price-spto">{listsp[0].productimg}</div>
                    
                </div>

                <div className="feature__haispbe">

                    <div className="feature__be">
                    <div className="boc-img-spbe">
                      <img src={listsp[1].productimg} alt="" />
                    </div>

                      <div className="in-fo-spbe">
                        <div className="limited-btn">Limited Offer</div>
                        <div className="text-spnho">{listsp[1].name}</div>
                        <div className="price-spnho">{listsp[1].importPrice}</div>
                      </div>

                    </div>

                    <div className="feature__be">
                    <div className="boc-img-spbe">
                      <img src={listsp[2].productimg} alt="" />
                    </div>

                      <div className="in-fo-spbe">
                        <div className="limited-btn">Limited Offer</div>
                        <div className="text-spnho">{listsp[2].name}</div>
                        <div className="price-spnho">{listsp[2].importPrice}</div>
                      </div>

                    </div>

                    
                </div>
            
            </div>
            

            
           </div>
        </>
     );
}

export default FeatureProduct;