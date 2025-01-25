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
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dropzone from "react-dropzone";

const PlanDialog = ({ open, onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  };
  const handleInputChange = (event) => {
    setName(event.target.value);
    setIsChanged(true);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setIsChanged(true);
  };

  return (
    <Dialog open={open} onClose={onClose} className="plandialog">
      <span className="dialogueclose" onClick={onClose}>
        <CloseIcon />
      </span>
      <DialogTitle className="dialoguetitle">
        {isChanged ? "Edit Plan" : "New Plan"}
      </DialogTitle>
      <DialogContent>
        <Box className="dialog-content">
          {/* Input Fields */}
          <Box className="input-fields">
            <FormControl fullWidth>
              <MUISelect
                value={selectedOption}
                onChange={handleSelectChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                Plan Type*
                </MenuItem>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </MUISelect>
            </FormControl>
            <TextField placeholder="Name*" variant="outlined" fullWidth onClick={handleInputChange}/>
          </Box>

          {/* Drag and Drop File Upload */}
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <Box {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <Typography>
                Drag and drop file here
                </Typography>
              </Box>
            )}
          </Dropzone>

          {/* Dropdown Menu */}
          <FormControl fullWidth>
            <MUISelect
              value={selectedOption}
              onChange={handleSelectChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
              Sub’s View Permission
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
            </MUISelect>
          </FormControl>
        </Box>
      </DialogContent>
      <Button
        className="Addbutton"
        variant="contained"
        color="primary"
        onClick={onClose}
      >
       {isChanged ?"Save" :"Add"}
      </Button>
    </Dialog>
  );
};

export default PlanDialog;
