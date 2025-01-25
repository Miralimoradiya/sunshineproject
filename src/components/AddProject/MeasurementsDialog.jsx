// src/components/MeasurementsDialog.js

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
  Checkbox,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import img2 from "../../assets/project1/delete.svg";
import { IoAdd } from "react-icons/io5";

const MeasurementsDialog = ({ open, onClose, onAddStory }) => {
  const [stories, setStories] = useState([{ floor: "", units: "" }]);
  const [selectedStories, setSelectedStories] = useState([]);

  const handleInputChange = (index, event) => {
    const newStories = [...stories];
    newStories[index][event.target.name] = event.target.value;
    setStories(newStories);
  };

  const addStory = () => {
    setStories([...stories, { floor: "", units: "" }]);
  };

  const deleteStory = (index) => {
    const newStories = stories.filter((_, i) => i !== index);
    setStories(newStories);
    setSelectedStories(
      selectedStories.filter((story) => story !== `Floor ${index + 1}`)
    );
  };

  const handleSelectChange = (event) => {
    setSelectedStories(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} className="addproject-dialogue">
      <span className="dialogueclose" onClick={onClose}>
        <CloseIcon />
      </span>
      <DialogTitle className="dialoguetitle">Stories</DialogTitle>
      <DialogContent>
        <div className="contentsec">
          <FormControl fullWidth>
            <MUISelect
              multiple
              value={selectedStories}
              className="dialog-select"
              onChange={handleSelectChange}
              renderValue={(selected) =>
                selected.length ? selected.join(", ") : "Select Stories"
              }
              sx={{
                borderRadius: "23px",
                width: "100%",
                opacity: 1,
              }}
            >
              {stories.map((story, index) => (
                <MenuItem key={index} value={`Floor ${index + 1}`}>
                  <Checkbox
                    checked={selectedStories.indexOf(`Floor ${index + 1}`) > -1}
                  />
                  <ListItemText primary={`Floor ${index + 1}`} />
                </MenuItem>
              ))}
            </MUISelect>
          </FormControl>

          <div className="storiessec">
            <div className="left">
              <h3>Stories</h3>
              {stories.map((story, index) => (
                <div key={index} className="story-item">
                  <TextField
                    name="floor"
                    placeholder={`Floor ${index + 1}`}
                    variant="standard"
                    value={story.floor}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  <CloseIcon
                    onClick={() => deleteStory(index)}
                    style={{ cursor: "pointer" }}
                  />
                  <ExpandMoreIcon />
                </div>
              ))}
            </div>

            <div className="vertical-line"></div>

            <div className="right">
              <div>
                <h3>Units</h3>
                {stories.map((story, index) => (
                  <div key={index} className="story-item">
                    <TextField
                      name="units"
                      placeholder="1"
                      variant="standard"
                      value={story.units}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                    <img
                      src={img2}
                      alt=""
                      onClick={() => deleteStory(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="add-story-button" onClick={addStory}>
            <IoAdd className="addicon" />
            <span>Add Story</span>
          </div>
        </div>
      </DialogContent>

      <div className="dialogsec-last">
        <Button onClick={onClose} className="cancelbutton">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onAddStory(stories);
            onClose();
          }}
          className="okaybutton"
        >
          Okay
        </Button>
      </div>
    </Dialog>
  );
};

export default MeasurementsDialog;

