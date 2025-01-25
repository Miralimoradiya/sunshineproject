import React, {useState} from 'react'
import addbutton from "../../assets/project1/plus.svg";
import SubContractor from "../projectAdding/SubContractor"
import SubContractorDialog from "../../components/Subcontractorpage/SubContractorDialog"

export default function SubContra() {
    const [openDialog, setOpenDialog] = useState(false);

    const handleAddDialogue = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialogue = () => {
      setOpenDialog(false);
    };
  return (
    <>
          <div className="addproject">
        <div className="addproject-main">
          <div className="project1-top1">
            <div>
              <h1 style={{ fontFamily: "sans-serif" }}>Sub-Contractors</h1>
            </div>
            <div className="selectaddflex">
              <div>
                <select>
                  <option value="Active project">Active Sub</option>
                  <option value="1">option1</option>
                  <option value="2">option2</option>
                  <option value="3">option3</option>
                </select>
              </div>
              <div
                className="addflex"
                onClick={handleAddDialogue}
                style={{ textDecoration: "none" }}
              >
                <button className="addbutton">
                  <img src={addbutton} alt="Add Sub" />
                </button>
                <span>Add Sub
                </span>
              </div>
              <SubContractorDialog
          open={openDialog}
          onClose={handleCloseDialogue}
        />
            </div>
          </div>
          <SubContractor />

        </div>
      </div>
    </>
  )
}
