import React, { useState } from "react";
import addbutton from "../../assets/project1/plus.svg";
import PlanDialog from "../../components/Planpage/PlanDialog";
import PlanTable from "../../components/Planpage/PlanTable";

export default function Plan() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddDialogue = () => {
    setOpenDialog(true);
  };

  const handleCloseDialogue = () => {
    setOpenDialog(false);
  };

  const handleAddStory = (stories) => {
    console.log("Added stories:", stories);
  };

  const data = [
    {
      name: "John Doe",
      type: "Architect",
      version: "1",
      link: "3 (Latest Version)",
      update:"22/3/2004"
    },
    {
      name: "Jane Smith",
      type: "Mechanical 8",
      version: "2",
      link: "2 (Latest Version)",
      update:"22/3/2004"
    },
    {
      name: "Alice Johnson",
      type: "Architect",
      version: "3",
      link: "3 (Latest Version)",
      update:"22/3/2004"
    },
    {
      name: "John rop",
      type: "Designer",
      version: "4",
      link: "3 (Latest Version)",
      update:"22/3/2004"
    },
    {
      name: "rius Doe",
      type: "Architect",
      version: "5",
      link: "4 (Latest Version)",
      update:"22/3/2004"
    },
    {
      name: "piya jain",
      type: "Architect",
      version: "6",
      link: "2 (Latest Version)",
      update:"22/3/2004"
    },
    {
      name: "vru vachiyat",
      type: "Architect",
      version: "7",
      link: "3 (Latest Version)",
      update:"22/3/2004"
    },
    {
      name: "Maitri jain",
      type: "Mechanical 8",
      version: "8",
      link: "2 (Latest Version)",
      update:"22/3/2004"
    },
    {
      name: "alice pure",
      type: "Architect",
      version: "9",
      link: "3 (Latest Version)",
      update:"22/3/2004"
    },
  ];

const actionButtonStyles = {
  position: "fixed",
  display: "none",
  top: "14.5%",
  right: "9%",
};

const buttonStyles = {
  color: "white",
  display: "none",
  backgroundColor: "#FF4D4D",
  borderRadius: "25px",
  padding: "10px 90%",
  boxShadow: "0 4px 8px rgba(238, 0, 0, 0.2)",
  transition: "2s",
};
  return (
    <>
      <div className="addproject">
        <div className="addproject-main">
          <div className="project1-top1">
            <div>
              <h1 style={{ fontFamily: "sans-serif" }}>Plans</h1>
            </div>
            <div className="selectaddflex">
              <div>
                <select>
                  <option value="Active project">All Types</option>
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
                <span>Add Plan</span>
              </div>
              <PlanDialog
                open={openDialog}
                onClose={handleCloseDialogue}
                onAddStory={handleAddStory}
              />
            </div>
          </div>
          <PlanTable data={data} buttonStyles={buttonStyles} actionbuttonStyles={actionButtonStyles}/>
        </div>
      </div>
    </>
  );
}
