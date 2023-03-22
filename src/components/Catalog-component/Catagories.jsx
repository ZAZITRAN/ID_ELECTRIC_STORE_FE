import './catagories.scss'
function Catagories() {
    return ( <>
        <div className="catagories">

            <div className="catagories__toptext">
                <div className="catagories__textto">All Categories</div>
                <div className="catagories__textnho">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </div>    
            </div>

            <div className="catagories__body">

                <div className="thanhloc">
                    <div className="thanhloc-scroll">
                        <div className="thanhloc-scroll__name">All Categories</div>
                        <div className="thanhloc-scroll__list">

                             <div className="thanhloc-scroll__son">
                                <div className="thanhloc-scroll__son-name">Computer & Laptop</div>
                                <div className="thanhloc-scroll__son-sl">(25)</div>                              
                             </div>

                             <div className="thanhloc-scroll__son">
                                <div className="thanhloc-scroll__son-name">Mobile & Tablet</div>
                                <div className="thanhloc-scroll__son-sl">(125)</div>                              
                             </div>

                             <div className="thanhloc-scroll__son">
                                <div className="thanhloc-scroll__son-name">Camera</div>
                                <div className="thanhloc-scroll__son-sl"> (150)</div>                              
                             </div>

                             <div className="thanhloc-scroll__son">
                                <div className="thanhloc-scroll__son-name">TV & Smart Box</div>
                                <div className="thanhloc-scroll__son-sl">(75)</div>                              
                             </div>

                             <div className="thanhloc-scroll__son">
                                <div className="thanhloc-scroll__son-name">Home Appliance</div>
                                <div className="thanhloc-scroll__son-sl">(75)</div>                              
                             </div>

                             <div className="thanhloc-scroll__son">
                                <div className="thanhloc-scroll__son-name">Smart Watch</div>
                                <div className="thanhloc-scroll__son-sl">(45)</div>                              
                             </div>
                             
                        </div>
                        
                    </div>
                    <div className="thanhloc-keoPrice">
                        
                    </div>
                    <div className="thanhloc-location"></div>
                    <div className="thanhloc-vote"></div>
                    
                </div>

                <div className="sp-loc">

                    <div className="list-sques">

                        <div className="sques-sun">
                            <div className="sques-sun__img">
                                <img src="" alt="" />
                                <div className="sques-sun__text"></div>
                            </div>
                        </div>

                    </div>

                    <div className="featured-brand">
                        <div className="featured-brand__img">
                            <img src="" alt="" />
                        </div>
                        
                    </div>

                    <div className="list-sp-loc">

                    <div className="list-sp-loc__top">
                        <div className="list-sp-loc__text"></div>
                        <div className="list-sp-loc__viewAll"></div>
                    </div>

                    <div className="list-sp-loc__bottom">

                    </div>
                    
                        
                
                    </div>
                </div>
            </div>
            

            
        </div>
    </> );
}

export default Catagories;