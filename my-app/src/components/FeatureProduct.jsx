import "./feature.scss"
function FeatureProduct() {
    return ( 
        <>
           <div className="feature">
            <div className="feature__textto">Featured Products</div>
            <div className="feature__textnho">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </div>
            <div className="feature__listsp">

                <div className="feature__spto">
                    <div className="text-spto">Wireless Microphone</div>
                    <div className="spto-img">
                    <img src="" alt="" />

                    </div>
                    <div className="price-spto">$19.99</div>
                    
                </div>

                <div className="feature__haispbe">

                    <div className="feature__be">
                    <div className="boc-img-spbe">
                      <img src="" alt="" />
                    </div>

                      <div className="in-fo-spbe">
                        <div className="limited-btn">Limited Offer</div>
                        <div className="text-spnho">Smart Watch New Series</div>
                        <div className="price-spnho">$19.99</div>
                      </div>

                    </div>

                    <div className="feature__be">
                    <div className="boc-img-spbe">
                      <img src="" alt="" />
                    </div>

                      <div className="in-fo-spbe">
                        <div className="limited-btn">Limited Offer</div>
                        <div className="text-spnho">Camera HD + Lens</div>
                        <div className="price-spnho">$19.99</div>
                      </div>

                    </div>

                    
                </div>
            
            </div>
            

            
           </div>
        </>
     );
}

export default FeatureProduct;