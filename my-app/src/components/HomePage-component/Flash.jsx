import "./flash.scss"
import Countdown from "./Countdown";
function Flash() {
    return ( 
    <>
    <div className="flash">
        <div className="flash__top">
            <div className="flash__toptext">Flash Sale</div>

            <div className="flash__top-thanh">
            <i className="fa-solid fa-arrow-left-long"></i>

            <div className="chamcham">
                <div className="cham red"></div>
                <div className="cham"></div>
                <div className="cham"></div>
                <div className="cham"></div>
                <div className="cham"></div>
            </div>
            <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>

        <div className="flash__listsp">

            <div className="flash__tbSale">
                <div className="tbsale-text-top">Up to 30% Off!</div>
                <div className="tbsale-text-bottom">

                    <div className="tbsale-text-bottom-text">Sale End In:</div>
                    <Countdown></Countdown>
                </div>
            </div>

            <div className="flash__sun">

                <div className="flash-sun-img">
                    <img src="" alt="" />
                </div>

                <div className="info-flash-sun">

                    <div className="info-flash-sun__name">Wireless Headphone</div>
                    <div className="info-flash-sun__prive">
                        <div className="price-current">$29.99</div>
                        <div className="dautru">-</div>
                        <div className="price-discount">$19.99</div>
                    </div>
                    <div className="info-flash-sun__vote">
                        <div className="info-flash-sun__aval">Available: 10 </div>
                        <div className="info-flash-sun__sold">Sold: 5 </div>
                    </div>
                    <div className="info-flash-sun__tyleVote">
                        <div className="info-flash-sun__tyleVote-red"></div>
                    </div>
        
                </div>

            </div>
            <div className="flash__sun">

<div className="flash-sun-img">
    <img src="" alt="" />
</div>

<div className="info-flash-sun">

    <div className="info-flash-sun__name">Wireless Headphone</div>
    <div className="info-flash-sun__prive">
        <div className="price-current">$29.99</div>
        <div className="dautru">-</div>
        <div className="price-discount">$19.99</div>
    </div>
    <div className="info-flash-sun__vote">
        <div className="info-flash-sun__aval">Available: 10 </div>
        <div className="info-flash-sun__sold">Sold: 5 </div>
    </div>
    <div className="info-flash-sun__tyleVote">
        <div className="info-flash-sun__tyleVote-red"></div>
    </div>

</div>

</div>

<div className="flash__sun">

<div className="flash-sun-img">
    <img src="" alt="" />
</div>

<div className="info-flash-sun">

    <div className="info-flash-sun__name">Wireless Headphone</div>
    <div className="info-flash-sun__prive">
        <div className="price-current">$29.99</div>
        <div className="dautru">-</div>
        <div className="price-discount">$19.99</div>
    </div>
    <div className="info-flash-sun__vote">
        <div className="info-flash-sun__aval">Available: 10 </div>
        <div className="info-flash-sun__sold">Sold: 5 </div>
    </div>
    <div className="info-flash-sun__tyleVote">
        <div className="info-flash-sun__tyleVote-red"></div>
    </div>

</div>

</div>


        </div>
        
        
    </div>
    
    </>
     );
}

export default Flash;