import React, { useState } from "react";
import addbutton from "../../assets/project1/plus.svg";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from "../../assets/project1/fezbot2000-80b0ydkwj9A-unsplash.png";
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";

const ImagesHead = () => {
  return (
    <div className="link-planhead">
 <div className="planpage-top1">
    <div className="left">
      <h1>
        <Link to="/project1" className="linking">
          <div className="icon-container">
            <ArrowBackIosIcon className="arrow-icon" />
            <img src={img1} alt="" />
          </div>
          <div className="desc">
            <p>Rachel Palmer’s Project</p>
            <p>Dereak’s Smarts Project</p>
          </div>
        </Link>
      </h1>

      <p style={{ margin: "25px 0px 0px 0px" }}>
        projects <ArrowForwardIosIcon className="arrow-right" /> Rachel
        Palmer’s Project <ArrowForwardIosIcon className="arrow-right" /> Images
      </p>
    </div>
  </div>
</div>
   
  )
}

export default ImagesHead
