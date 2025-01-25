import React from 'react'
import { useNavigate } from 'react-router-dom';
import addbutton from "../../../assets/project1/plus.svg";
import BillingPage from "../../projectAdding/BillingPage"

const BillingCycle = () => {
  const navigate = useNavigate();

  const handleAddBillingCycle = () => {
    navigate('/sidebarbillingcycle/addbillings');
  };
  return (
    <>
     <div className="addproject">
        <div className="addproject-main">
          <div className="project1-top1">
            <div>
              <h1 style={{ fontFamily: "sans-serif" }}>Billing Cycles</h1>
            </div>
            <div className="selectaddflex">
              <div>
                <select>
                  <option value="Active project">All Billing Cycles</option>
                  <option value="1">option1</option>
                  <option value="2">option2</option>
                  <option value="3">option3</option>
                </select>
              </div>
              <div
                className="addflex"
                style={{ textDecoration: "none" }} onClick={handleAddBillingCycle}
              >
                <button className="addbutton">
                  <img src={addbutton} alt="Add Project" />
                </button>
                <span>Add Billing Cycles
                </span>
              </div>
              
            </div>
          </div>
          <BillingPage />

        </div>
      </div>
    </>
  )
}

export default BillingCycle
