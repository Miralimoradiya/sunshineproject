import React from "react";
import img1 from "../../assets/images/loginpage/logo.png";
import img3 from "../../assets/images/loginpage/Mask Group 5.svg";
import img6 from "../../assets/images/loginpage/skyscraper-town-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Sendcode = () => {
  return (
    <>
      <div className="sendcode-sec">
        <div className="login-sec-left">
          <div className="mainimages">
            <div className="background">
              <img src={img3} alt="Mask" className="maskingimg" />
            </div>
            <div className="upofbackground">
              <img src={img1} alt="Logo" className="logoimg" />
              <img src={img6} alt="" className="state" />
            </div>
          </div>
        </div>

        <div className="login-sec-right">
          <div className="sendcodesection">
            <h1>sendcode to</h1>
            <div className="radioflex">
              <div>
                <input type="radio" name="contactMethod" id="email" />
                <label htmlFor="email">Email</label>
              </div>

              <div>
                <input type="radio" name="contactMethod" id="sms" />
                <label htmlFor="sms">SMS</label>
              </div>
            </div>
            <button className="loginbutton">
              <Link to="/project1" className="loginbutton">
                submit
              </Link>
            </button>

            <p className="backtologin">
              <Link to="/" className="backtologin">
                back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sendcode;
