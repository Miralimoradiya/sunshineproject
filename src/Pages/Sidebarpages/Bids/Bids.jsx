import React, { useState } from "react";
import addbutton from "../../../assets/project1/plus.svg";
import Bidspage from "../../projectAdding/Bidspage";
import BidsDialog from "../../../components/BidsPage/BidsDialog";
import LaunchIcon from "@mui/icons-material/Launch";
import Button from "@mui/material/Button";
import BidsLastDialogue from "../../../components/BidsPage/ConcreateDialog/BidsLastDialogue";

export default function Bids() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openAnotherDialog, setOpenAnotherDialog] = useState(false);

  const handleAddDialogue = () => {
    setOpenDialog(true);
  };

  const handleCloseDialogue = () => {
    setOpenDialog(false);
  };

  const handleOpenAnotherDialogue = () => {
    setOpenAnotherDialog(true);
  };

  const handleCloseAnotherDialogue = () => {
    setOpenAnotherDialog(false);
  };

  return (
    <>
      <div className="addproject">
        <div className="addproject-main">
          <div className="project1-top1">
            <div>
              <h1 style={{ fontFamily: "sans-serif" }}>Bids</h1>
            </div>
            <div className="selectaddflex">
              <div>
                <select>
                  <option value="Active project">All Bids</option>
                  <option value="1">option1</option>
                  <option value="2">option2</option>
                  <option value="3">option3</option>
                </select>
              </div>
              <div
                className="addflex"
                style={{ textDecoration: "none" }}
                onClick={handleAddDialogue}
              >
                <button className="addbutton">
                  <img src={addbutton} alt="Add Project" />
                </button>
                <span>Add Bid(s)</span>
              </div>
              <div>
                <Button className="redirection" onClick={handleOpenAnotherDialogue}>
                  <b>
                    <LaunchIcon />
                  </b>
                </Button>
              </div>
              {/* Dialog for add bids */}
              <BidsDialog open={openDialog} onClose={handleCloseDialogue} />
              {/* Dialog for another action */}
              <BidsLastDialogue open={openAnotherDialog} onClose={handleCloseAnotherDialogue} />
            </div>
          </div>
          <Bidspage />
        </div>
      </div>
    </>
  );
}
