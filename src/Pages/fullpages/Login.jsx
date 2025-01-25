import React from "react";
import img1 from "../../assets/images/loginpage/logo.png";

import img3 from "../../assets/images/loginpage/Mask Group 5.svg";
import img6 from "../../assets/images/loginpage/skyscraper-town-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Login = () => {
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
        <h1>Login to Your Account</h1>
        <div className="logininputs">
          <div className="emaildata">
            <input type="text" className="emaildata-email" />
          </div>
          <div className="passworddata">
            <input type="text" className="passworddata-password" />
          </div>
        </div>
        <Link to="/forgetpassword" className="forgetpassword">forget password</Link>
        <div className="remember">
          <input type="checkbox" name="" id="" className="remembercheckbox" />
          <p className="remember-text">Remember me</p>
        </div>
        {/* <button className="loginbutton"><Link to="/sendcode" className="loginbutton">Login</Link></button>project1 */}
        <button className="loginbutton"><Link to="/project1" className="loginbutton">Login</Link></button>

      </div>
    </div>
  );
};

export default Login;
