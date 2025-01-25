import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  Button,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import deletebutton from "../../assets/project1/delete.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlanDeleteDialog from "./PlanDeleteDialog";
import { GoDownload } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";

const PlanTable = ({ data,actionbuttonStyles, buttonStyles }) => {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    handleClose();
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCheckboxChange = (name) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [name]: !prev[name] };
      return updated;
    });
  };

  const handleSelectAllChange = () => {
    setSelectAll((prev) => {
      const newState = !prev;
      const newCheckedItems = {};
      data.forEach((row) => {
        newCheckedItems[row.name] = newState;
      });
      setCheckedItems(newCheckedItems);
      return newState;
    });
  };

  const isAnyItemSelected = Object.values(checkedItems).filter(Boolean).length > 1;

  return (
    <section>
      <div className="planpage-section2">
        <TableContainer component={Paper} className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" align="center">
                  <label className="checking">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                    <span className="checkbox-indicator"></span>
                  </label>
                </TableCell>
                <TableCell>
                  <div className="headertable">
                    <div className="header-content">
                      <span className="firstspan">Name</span>
                      <span className="secspan">Contains</span>
                    </div>
                    <div className="filter-icon">
                      <FilterListIcon />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="headertable">
                    <div className="header-content">
                      <span className="firstspan">Type</span>
                      <span className="secspan">Contains</span>
                    </div>
                    <div className="filter-icon">
                      <FilterListIcon />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Version</p>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Link</p>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Last Update</p>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Actions</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <label className="checking">
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={!!checkedItems[row.name]}
                        onChange={() => handleCheckboxChange(row.name)}
                      />
                      <span className="checkbox-indicator"></span>
                    </label>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.version}</TableCell>
                  <TableCell
                    className="linking"
                    onMouseEnter={() => setHoveredLink(row.version)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {row.link}
                    {hoveredLink === row.version && (
                      <div className="popover">
                        <GoDownload onClick={() => handleSnackbarOpen("Downloading...")} />
                        <PiLineVertical />
                        <FaEye onClick={() => handleSnackbarOpen("Viewing...")} />
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{row.update}</TableCell>
                  <TableCell>
                    <div className="deletecollumn">
                      <img
                        src={deletebutton}
                        alt=""
                        onClick={() => handleClickOpen()}
                        style={{ cursor: "pointer" }}
                      />
                      <span style={{ padding: "0px 0px 0px 20px" }}>
                        <ExpandMoreIcon style={{ color: "#6D737C" }} />
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {isAnyItemSelected && (
          <div style={actionbuttonStyles}>
            <Button
            style={buttonStyles}
              onClick={() => handleSnackbarOpen("deleted selected Items")}
            >
              Delete
            </Button>
          </div>
        )}

        <PlanDeleteDialog
          open={open}
          onClose={handleClose}
          onConfirm={handleDelete}
        />
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={1000}
          message={snackbarMessage}
          onClose={handleSnackbarClose}
        />
      </div>
    </section>
  );
};

export default PlanTable;
