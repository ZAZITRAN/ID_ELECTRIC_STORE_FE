
import "./Footer.scss";

function Footer() {
    return (
         <footer className="footer">
          <div className="newLetter">
        <div className="left-newLetter">
          <img src="./footerImg/Vector.png" alt="" />
          <div className="newLetter-text">
            <p>Join our newsletter now!</p>
            <span>Register now and get our latest updates and promos.</span>
          </div>
        </div>
        <div className="right-newLetter">
          <div className="right-newLetter-input">
            <input placeholder="Enter your email" />
            <button>Join</button>
          </div>
        </div>
      </div>
        </footer> 
    );
}
export default Footer;
