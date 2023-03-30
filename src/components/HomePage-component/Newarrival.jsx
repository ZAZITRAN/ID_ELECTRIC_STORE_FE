import "./newarrival.scss"
import { useEffect , useState } from "react";
function Newarrival() {
    let arr = [
        {name:"Smartphone 5G" , importPrice:"$299" , productimg:""},
        {name:"Smartphone 5G" , importPrice:"$299" , productimg:""},
        {name:"Smartphone 5G" , importPrice:"$298" , productimg:""},
    ] 
    const [listsp , setListsp] = useState(arr)
    return ( 
        <>
         <div className="newarrival">
            
            <div className="newarrival__textto">New Arrival</div>
            <div className="newarrival__textnho">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <div className="newarrival__listsp">
            {listsp.map((item , index)=>{
                return(
                <div key={index} className="newarrival__sun">
                    <div className="brand-new">New</div>
                    <div className="newarrival__img">
                        <img src={item.productimg} alt="" />
                    </div>
                    <div className="newarrival__in4sp">
                        <div className="newarrival__namesp">{item.name}</div>
                        <div className="newarrival__price">{item.importPrice}</div>
                        
                    </div>
                </div>
                )
            })}


                
            </div>
            

            
         </div>
        </>
     );
}

export default Newarrival;