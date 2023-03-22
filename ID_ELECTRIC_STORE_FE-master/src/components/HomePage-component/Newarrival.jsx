import "./newarrival.scss"
import { useEffect , useState } from "react";
function Newarrival() {
    let arr = [
        {name1:"Smartphone 5G" , price:"$299"},
        {name1:"Smartphone 5G" , price:"$299"},
        {name1:"Smartphone 5G" , price:"$299"}

    ]
    const [listsp , setListsp] = useState(arr)
    return ( 
        <>
         <div className="newarrival">
            
            <div className="newarrival__textto">New Arrival</div>
            <div className="newarrival__textnho">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <div className="newarrival__listsp">

                <div className="newarrival__sun">
                    <div className="brand-new">New</div>
                    <div className="newarrival__img">
                        <img src="" alt="" />
                    </div>
                    <div className="newarrival__in4sp">
                        <div className="newarrival__namesp">Smartphone 5G</div>
                        <div className="newarrival__price">$299</div>
                        
                    </div>
                </div>

                <div className="newarrival__sun">
                    <div className="brand-new">New</div>
                    <div className="newarrival__img">
                        <img src="" alt="" />
                    </div>
                    <div className="newarrival__in4sp">
                        <div className="newarrival__namesp">Smartphone 5G</div>
                        <div className="newarrival__price">$299</div>
                        
                    </div>
                </div>

                <div className="newarrival__sun">
                    <div className="brand-new">New</div>
                    <div className="newarrival__img">
                        <img src="" alt="" />
                    </div>
                    <div className="newarrival__in4sp">
                        <div className="newarrival__namesp">Smartphone 5G</div>
                        <div className="newarrival__price">$299</div>
                        
                    </div>
                </div>
                
            </div>
            

            
         </div>
        </>
     );
}

export default Newarrival;