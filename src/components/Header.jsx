import React, {useState} from "react";
import logo from "../assets/Header/logo.png";
import iconsearch from "../assets/Header/loupe.svg";
import profile from "../assets/Header/Group 564.png";
import arrow from "../assets/Header/left-arrow.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <div className="header">
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="searching">
        <input type="text" placeholder="Search for anything" />
        <img src={iconsearch} alt="Search" className="searchicon"/>
      </div>
      <div className="icons" 
             onMouseEnter={() => setShowOptions(true)} 
             onMouseLeave={() => setShowOptions(false)}>
          <img src={profile} alt="Profile" className="profilepic" />
          <img src={arrow} alt="Arrow" className="profile-arrow" />
          {showOptions && (
            <div className="dropdown">
              <Link to="/addproject">Edit Profile</Link>
              <Link to="/">Logout</Link>
              <Link to="/forgetpassword">Forget Password</Link>
            </div>
          )}
        </div>
    </div>
    </>
  );
};

export default Header;

