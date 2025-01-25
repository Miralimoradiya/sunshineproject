import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa";
import { IoImages } from "react-icons/io5";
import {
  MdConstruction,
  MdAccountBalanceWallet,
  MdOutlineDeveloperBoard,
} from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(() => {
    return parseInt(localStorage.getItem("activeIndex")) || 0;
  });
  const [expandedRow, setExpandedRow] = useState(false);

  const handleToggleRow = () => {
    setExpandedRow(!expandedRow);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
  };

  return (
    <div className="sidebar">
      <nav className="side-nav">
        <ul className="nav-menu">
          <Link to="/home">
            {" "}
            <li
              className={`nav-item ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleItemClick(0)}
            >
              <Link to="/home">
                <IoHome />
                <span className="menu-text">Dashboard</span>
                <code
                  className="leftarrow"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggleRow();
                  }}
                >
                  <IoIosArrowForward
                    style={{
                      transition: "transform 0.3s",
                      transform: expandedRow ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                </code>
              </Link>
              {expandedRow && (
                <div
                  style={{
                    backgroundColor: "#142534",
                    width: "130px",
                    color: "white",
                    borderRadius: "12px",
                    padding: "0px 0px 0px 20px",
                    margin: "10px 0px 0px 0px",
                  }}
                >
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li style={{ padding: "8px 0" }}>Item 1</li>
                    <li style={{ padding: "8px 0" }}>Item 2</li>
                    <li style={{ padding: "8px 0" }}>Item 3</li>
                  </ul>
                </div>
              )}
            </li>
          </Link>

          <Link to="/project1">
            <li
              className={`nav-item ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleItemClick(1)}
            >
              <Link to="/project1">
                <MdOutlineDeveloperBoard />
                <span className="menu-text">Projects</span>
              </Link>
            </li>
          </Link>
          <Link to="/planpage">
            {" "}
            <li
              className={`nav-item ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleItemClick(2)}
            >
              <Link to="/planpage">
                <FaChartSimple />
                <span className="menu-text">Plans</span>
              </Link>
            </li>
          </Link>
          <Link to="/sidebarbids">
            <li
              className={`nav-item ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleItemClick(3)}
            >
              <Link to="/sidebarbids">
                <MdConstruction />
                <span className="menu-text">Bids</span>
                <span className="fourbutton">4</span>
              </Link>
            </li>
          </Link>
          <Link to="/sidebarbillingcycle">
            <li
              className={`nav-item ${activeIndex === 5 ? "active" : ""}`}
              onClick={() => handleItemClick(5)}
            >
              <Link to="/sidebarbillingcycle">
                <MdAccountBalanceWallet />
                <span className="menu-text">Billing Cycles</span>
              </Link>
            </li>
          </Link>
          <Link to="/sidebarsubcontractor">
            {" "}
            <li
              className={`nav-item ${activeIndex === 6 ? "active" : ""}`}
              onClick={() => handleItemClick(6)}
            >
              <Link to="/sidebarsubcontractor">
                <FaFileContract />
                <span className="menu-text">Sub-Contractor</span>
              </Link>
            </li>
          </Link>
          <Link to="/sidebarimages">
            <li
              className={`nav-item ${activeIndex === 8 ? "active" : ""}`}
              onClick={() => handleItemClick(8)}
            >
              <Link to="/sidebarimages">
                <IoImages />
                <span className="menu-text">Images</span>
              </Link>
            </li>
          </Link>
          <Link to="/sidebarsetting">
            {" "}
            <li
              className={`nav-item ${activeIndex === 9 ? "active" : ""}`}
              onClick={() => handleItemClick(9)}
            >
              <Link to="/sidebarsetting">
                <IoSettings />
                <span className="menu-text">Settings</span>
              </Link>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
