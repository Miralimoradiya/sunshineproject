import React from "react";
import img1 from "../../assets/images/loginpage/logo.png";

import img3 from "../../assets/images/loginpage/Mask Group 5.svg";
import img6 from "../../assets/images/loginpage/skyscraper-town-svgrepo-com.svg";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <div className="login-sec">
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
        <h1>Recover your Password</h1>
        <div className="forgetpass-logininputs">
          <div className="emaildata">
            <input
              type="text"
              className="emaildata-email"
              placeholder="Email*"
            />
          </div>
        </div>
        <button className="loginbutton">
          <Link to="/codeofforgetpass" className="loginbutton">
            Send Reset Link
          </Link>
        </button>

        <div>
          <p className="forgetpass-backtologin">
            <Link to="/" className="forgetpass-backtologin">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
