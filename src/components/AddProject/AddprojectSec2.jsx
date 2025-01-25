import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select as MUISelect,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PlanPage from "../../Pages/projectAdding/PlanPage";
import SubContractor from "../../Pages/projectAdding/SubContractor";
import Bidspage from "../../Pages/projectAdding/Bidspage";
import BillingPage from "../../Pages/projectAdding/BillingPage";
import ImagesPage from "../../Pages/projectAdding/ImagesPage";

const AddprojectSec2 = ({
  formData,
  onMeasurementsDialogOpen,
  onInputChange,
  isDataSaved,
  setActiveLink,
  activeLink
}) => {
  const [activeSection, setActiveSection] = useState("basic");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveLink(section);
  };

  const handleChange = (index, value) => {
    onInputChange(index, value);
    console.log("Index:", index, "Value:", value);
  };

  const siteInformationLabels = [
    "Contractor",
    "Owner",
    "SiteManager",
    "DefaultBidder",
    "Architectu",
    "ArchitectDesigner",
    "StructuralEngineer",
    "MEP Engineer",
    "Designer",
    "Start Date",
    "Submit Bills",
    "Checks Ready",
    "Checks Entered",
    "Submit to Owner",
    "Project Dropbox Folder Link",
  ];

  const renderSelect = (label, index) => (
    <FormControl fullWidth margin="normal" key={label}>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        label={label}
        name={label}
        sx={{
          borderRadius: 20,
          borderColor: "gray",
          height: 52
        }}
        className="custom-select"
        // value={formData.additionalInfo[index] || ""}
        // onChange={(e) => handleChange(index, e.target.value)}
        // displayEmpty
      >
        <MenuItem value="" disabled>
          {label}
        </MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </MUISelect>
    </FormControl>
  );

  return (
    <section>
      <div className="basicinformation">
        <div>
          <ul>
            <li>
              <a
                href="#"
                className={activeLink === "basic" ? "active" : ""}
                onClick={() => handleSectionClick("basic")}
              >
                Basic Information
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === "plan" ? "active" : ""}
                onClick={() => handleSectionClick("plan")}
              >
                Plan
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === "subcontractor" ? "active" : ""}
                onClick={() => handleSectionClick("subcontractor")}
              >
                Sub-Contractor
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === "bids" ? "active" : ""}
                onClick={() => handleSectionClick("bids")}
              >
                Bids
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === "billing" ? "active" : ""}
                onClick={() => handleSectionClick("billing")}
              >
                Billing Cycles
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === "images" ? "active" : ""}
                onClick={() => handleSectionClick("images")}
              >
                Images
              </a>
            </li>
          </ul>
        </div>
        <div style={{ display: activeSection === "basic" ? "block" : "none" }}>
          <div className="basicinfo-sec1">
            <h2>Address Informations</h2>
            <div className="addresinfo-sec1">
              {["name", "address", "city", "zip", "state"].map(
                (placeholder, index) =>
                  isDataSaved ? (
                    <div key={index} className="value-name-display">
                      <span>
                        {placeholder.charAt(0).toUpperCase() +
                          placeholder.slice(1)}
                      </span>
                      <strong>{formData[placeholder] || "-"}</strong>
                    </div>
                  ) : (
                    <TextField
                      key={index}
                      id={`outlined-basic-${index}`}
                      placeholder={
                        placeholder.charAt(0).toUpperCase() +
                        placeholder.slice(1)
                      }
                      value={formData[placeholder] || ""}
                      variant="outlined"
                      className="custom-textfield"
                      onChange={(e) =>
                        handleChange(placeholder, e.target.value)
                      }
                    />
                  )
              )}
            </div>
          </div>

          <div className="basicinfo-sec2">
            <h2>Site Informations</h2>
            <div className="siteinfo-sec1">
              {siteInformationLabels.map((label, index) =>
                isDataSaved ? (
                  <div key={label} className="value-select-display">
                    <span>{label}</span>
                    <strong>{formData.additionalInfo[index] || "-"}</strong>
                  </div>
                ) : (
                  renderSelect(label, index)
                )
              )}
            </div>
          </div>

          <div className="basicinfo-sec3">
            <h2>Measurements Informations</h2>
            <div className="measure-sec1">
              <div className="addstories">
                {isDataSaved ? (
                  <div className="value-name-display">
                    <span>Stories:</span>
                    <strong>{formData.measurements?.stories || "-"}</strong>
                  </div>
                ) : (
                  <>
                    <TextField
                      id="stories"
                      className="custom-textfield"
                      variant="outlined"
                      placeholder="Stories"
                      value={formData.measurements?.stories || ""}
                      onChange={(e) =>
                        handleChange("measurements.stories", e.target.value)
                      }
                    />
                    <span>
                      <Button onClick={onMeasurementsDialogOpen}>
                        <AddIcon />
                      </Button>
                    </span>
                  </>
                )}
              </div>
              <div>
                {isDataSaved ? (
                  <div className="value-name-display">
                    <span>Units:</span>
                    <strong>{formData.measurements?.units || "-"}</strong>
                  </div>
                ) : (
                  <TextField
                    id="units"
                    className="custom-textfield"
                    variant="outlined"
                    placeholder="Units"
                    value={formData.measurements?.units || ""}
                    onChange={(e) =>
                      handleChange("measurements.units", e.target.value)
                    }
                  />
                )}
              </div>
              <div>
                {isDataSaved ? (
                  <div className="value-name-display">
                    <span>Square Feet:</span>

                    <strong>{formData.measurements?.squareFeet || "-"}</strong>
                  </div>
                ) : (
                  <TextField
                    id="squareFeet"
                    className="custom-textfield"
                    variant="outlined"
                    placeholder="Square Feet"
                    value={formData.measurements?.squareFeet || ""}
                    onChange={(e) =>
                      handleChange("measurements.squareFeet", e.target.value)
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: activeSection === "plan" ? "block" : "none" }}>
          <PlanPage/>
        </div>
        <div
          style={{
            display: activeSection === "subcontractor" ? "block" : "none",
          }}
        >
          <SubContractor/>
        </div>
        <div style={{ display: activeSection === "bids" ? "block" : "none" }}>
          <Bidspage/>
        </div>
        <div
          style={{ display: activeSection === "billing" ? "block" : "none" }}
        >
          <BillingPage/>
        </div>
        <div style={{ display: activeSection === "images" ? "block" : "none" }}>
          <ImagesPage/>
        </div>
      </div>
    </section>
  );
};

export default AddprojectSec2;
