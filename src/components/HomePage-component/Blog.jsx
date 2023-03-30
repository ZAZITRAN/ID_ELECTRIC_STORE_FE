import "./newarrival.scss"
import "./blog.scss"
import { useEffect , useState } from "react";
function Blog() {
    let arr = [
        {name:"Smartphone 5G" , importPrice:"$299" , productimg:""},
        {name:"Smartphone 5G" , importPrice:"$299" , productimg:""},
        {name:"Smartphone 5G" , importPrice:"$299" , productimg:""},
    ] 
    const [listsp , setListsp] = useState(arr)
    return ( 
        <>
         <div className="newarrival">
            
            <div className="newarrival__textto">Blog</div>
            <div className="newarrival__listsp">
  

               {
                listsp.map((item , index)=>{
                    return(
                    <div key={index} className="newarrival__sun cc">
                    
                    <div className="newarrival__img cc">
                        <img src="" alt="" />
                    </div>

                    <div className="newarrival__in4sp">
                           
                        <div className="newarrival__in4sp-left1">
                            <div className="cc__we">We Offer the Best Quality Product to Our Customers</div>
                            <div className="cc__admin">
                            by <div className="cc__admin-name">Admin</div>, 12 Jan 2021
                            </div>
                            
                        </div>
                    </div>
                </div>
                    )
                })
               }






                
            </div>
            

            
         </div>
        </>
     );
}

export default Blog;