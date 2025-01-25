import React from "react";
import addbutton from "../../assets/project1/plus.svg";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="project1-top1">
      <div>
        <h1>Projects</h1>
      </div>
      <div className="selectaddflex">
        <div>
          <select>
            <option value="Active project">Active project</option>
            <option value="1">option1</option>
            <option value="2">option2</option>
            <option value="3">option3</option>
          </select>
        </div>
        <Link to="/addproject" className="addflex" style={{textDecoration:"none"}}>
          <button className="addbutton">
            <img src={addbutton} alt="Add Project" />
          </button>
          <span>Add Project</span>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
