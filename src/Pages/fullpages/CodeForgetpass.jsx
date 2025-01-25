import React from "react";
import img1 from "../../assets/images/loginpage/logo.png";

import img3 from "../../assets/images/loginpage/Mask Group 5.svg";
import img6 from "../../assets/images/loginpage/skyscraper-town-svgrepo-com.svg";
import { Link } from "react-router-dom";

const CodeForgetpass = () => {
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
        <h1 className="code-title">
          Please enter to code sent to email ending in su*******************.in
        </h1>
        <div className="forgetpass-logininputs">
          <div className="emaildata">
            <input
              type="text"
              className="emaildata-email"
              placeholder="Code*"
            />
          </div>
        </div>
        <button className="loginbutton">
          <Link to="/project1" className="loginbutton">
            Submit
          </Link>
        </button>

        <div className="code-down">
          <p className="backtologin">
            Resend Code after{" "}
            <Link to="/" className="code-backtologin">
              24 Seconds
            </Link>
          </p>
          <p className="code-backtologin">
            <Link to="/" className="code-backtologin">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeForgetpass;
