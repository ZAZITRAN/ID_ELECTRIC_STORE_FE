
import "./Footer.scss";


function Footer() {
    return (
        <footer className="footer">

            <div className="header-of-footer">
                <div className="newLetter">
                    <div className="left-newLetter">
                        <img src="/footerImg/Vector.png" alt="" />
                        <div className="newLetter-text">
                            <p>Join our newsletter now!</p>
                            <span>Register now and get our latest updates and promos.</span>
                        </div>
                    </div>
                    <div className="right-newLetter">
                        <form className="right-newLetter-input">
                            <input name="email" placeholder="Enter your email" />
                            <button type="submit">Join</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="center-of-footer">
                <div className="footer-title">
                    <h5>Tronix</h5>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sint dolor? Numquam quos ratione neque accusamus autem non vitae error, quas illum! Totam sed praesentium error magnam earum magni rem?</span><br />
                    <div className="call-mail">
                        <div className="call">
                            <img src="/footerImg/Call.png" alt="" /><p>+1234567890</p>
                        </div>

                        <div className="mail">
                            <img src="/footerImg/Email.png" alt="" />  <p>lorem@lorem.com</p> </div>
                        </div>


                </div>
                <div className="footer-about">
                    <div className="footer-company">
                        <p className="about_topic">Company</p>
                        <ul>
                            <li>About</li>
                            <li>Product</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="footer-info">
                        <p className="about_topic">Information</p>
                        <ul>
                            <li>Help Center</li>
                            <li>Payment Methods</li>
                            <li>Return &amp; Refund</li>
                            <li>Pyvacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <p className="about_topic">Follow Us</p>
                        <div className="img">
                            <img src="/footerImg/instagram.png" alt="" />
                            <img src="/footerImg/twitter.png" alt="" />
                            <img src="/footerImg/fb.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-of-footer">
                <p>Copyright © 2021 Tronix. All Right Reseved</p>
                <img src="/footerImg/payment.png" alt="" />
            </div>
        </footer>
    );
}
export default Footer;
