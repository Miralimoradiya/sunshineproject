import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LaunchIcon from "@mui/icons-material/Launch";

const AddprojectSec1 = ({ onSave, onCancel, onEdit, isDataSaved , savedRowData}) => {
  return (
    <div>
      <div className="addproject-top1">
        <div>
          <h1>
            <Link to="/project1">
              <ArrowBackIosIcon /> Projects
            </Link>
          </h1>
        </div>
        <div className="selectaddflex">
          <Button className="cancel" onClick={onCancel}>
            <b>Cancel</b>
          </Button>

          {isDataSaved ? (
            <Button className="redirection" onClick={onEdit}>
              <b>
                <LaunchIcon />
              </b>
            </Button>
          ) : (
            <Button className="save" onClick={onSave}>
              <b>Save</b>
            </Button>
          )}
        </div>
      </div>
      <div>
        <p>
          project <ArrowForwardIosIcon className="arrow-right" /> add project
        </p>
      </div>

       {isDataSaved && savedRowData && (
          <div>
            <h2>Saved Data:</h2>
            <div>
              <p>Name: {savedRowData.name}</p>
              <p>Address: {savedRowData.address}</p>
            </div>
          </div>
        )}

        
    </div>
  );
};

export default AddprojectSec1;
