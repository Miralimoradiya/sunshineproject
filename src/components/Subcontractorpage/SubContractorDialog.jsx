import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  Select as MUISelect,
  MenuItem,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../assets/add projecct/hamer.svg";

const SubContractorDialog = ({ open, onClose }) => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [name, setName] = useState("");
  const [isChanged, setIsChanged] = useState(false); 

  const handleInputChange = (event) => {
    setName(event.target.value);
    setIsChanged(true);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setIsChanged(true);
  };

  return (
    <Dialog open={open} onClose={onClose} className="subcontractordialog">
      <span className="dialogueclose" onClick={onClose}>
        <CloseIcon />
      </span>
      <DialogTitle className="dialoguetitle">
        <p> {isChanged ? "Edit Sub" : "Add Sub"}</p>
        <p>Project’s 2819172829</p>
      </DialogTitle>

      <DialogContent className="dialogcontent">
        <Box className="first">
          <TextField
            variant="outlined"
            placeholder="Enter something"
            fullWidth
            onChange={handleInputChange}
            className="inputField"
          />
          <Button>
            <img src={img1} alt="" style={{margin:"0px 20px 0px 0px"}}/>
            <span>Invite to Bid</span>
          </Button>
        </Box>

        <FormControl fullWidth margin="normal" className="dropdown">
          <MUISelect
            value={selectedOption1}
            displayEmpty
            onChange={handleSelectChange}
          >
            <MenuItem value="" disabled>
              Sub Contractor*
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </MUISelect>
        </FormControl>

        <FormControl fullWidth margin="normal" className="dropdown">
          <MUISelect
            value={selectedOption2}
            onChange={handleSelectChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Trade*
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </MUISelect>
        </FormControl>

        <FormControl fullWidth margin="normal" className="dropdown">
          <MUISelect
            value={selectedOption3}
            onChange={handleSelectChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Sub Contractor Contact*
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </MUISelect>
        </FormControl>
      </DialogContent>

      <Button
        className="Addbutton"
        variant="contained"
        color="primary"
        onClick={onClose}
      >
        {isChanged ? "Save" : "Add"}
      </Button>
    </Dialog>
  );
};

export default SubContractorDialog;
