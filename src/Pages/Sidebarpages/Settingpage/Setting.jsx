import React, { useState } from "react";
import addbutton from "../../../assets/project1/plus.svg";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  Select as MUISelect,
  MenuItem,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import deletebutton from "../../../assets/project1/delete.svg";
import CloseIcon from "@mui/icons-material/Close";

const options = [
  { label: "Entity Types" },
  { label: "Roles" },
  { label: "Users" },
];
const lists = [
  { label: "Trade Metrics" },
  { label: "Trade Types" },
  { label: "Plan Types" },
  { label: "Bill category" },
  { label: "Subcontractor Category" },
  { label: "Trade schedule" },
];
const CustomTable = ({ data }) => {
  return (
    <div className="planpage-section2">
      <TableContainer
        component={Paper}
        className="table-container"
        sx={{ backgroundColor: "#F8F8F8" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" align="center">
                <label className="checking">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-indicator"></span>
                </label>
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                <p className="tablehead">Id</p>
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
                    <span className="firstspan">Description</span>
                    <span className="secspan" style={{ padding: "5px 0 0 0" }}>
                      Contains
                    </span>
                  </div>
                  <div className="filter-icon">
                    <FilterListIcon />
                  </div>
                </div>
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                <p className="tablehead">Email</p>
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>
                <p className="tablehead">Actions</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <label className="checking">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkbox-indicator"></span>
                  </label>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {row.version}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <div className="deletecolumn" style={{ textAlign: "center" }}>
                    <img
                      src={deletebutton}
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const data = [
  {
    name: "John Doe",
    type: "Architect",
    version: "1",
    email: "johndoe@gmail.com",
  },
  {
    name: "Jane Smith",
    type: "Mechanical 8",
    version: "2",
    email: "janeSmith@gmail.com",
  },
  {
    name: "Alice Johnson",
    type: "Architect",
    version: "3",
    email: "aliceJohnson@gmail.com",
  },
  {
    name: "John rop",
    type: "Designer",
    version: "4",
    email: "JohnRop@gmail.com",
  },
  {
    name: "rius Doe",
    type: "Architect",
    version: "5",
    email: "riusdoe@gmail.com",
  },
  {
    name: "piya jain",
    type: "Architect",
    version: "6",
    email: "piyajain@gmaail.com",
  },
  {
    name: "vru vachiyat",
    type: "Architect",
    version: "7",
    email: "VruVachhiyat@gmail.com",
  },
  {
    name: "Maitri jain",
    type: "Mechanical 8",
    version: "8",
    email: "maitrijain@gmail.com",
  },
  {
    name: "alice pure",
    type: "Architect",
    version: "9",
    email: "alicepure@gmail.com",
  },
];

export default function Setting() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(() => {
    return parseInt(localStorage.getItem("selectedTab")) || 0;
  });
  const [selectedImg, setSelectedImg] = useState(() => {
    return parseInt(localStorage.getItem("selectedImg")) || 0;
  });
  const [selectedList, setSelectedList] = useState(() => {
    return parseInt(localStorage.getItem("selectedList")) || 0;
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedImg(index);
    localStorage.setItem("selectedImg", index);
  };
  const handleListClick = (index) => {
    setSelectedList(index);
    localStorage.setItem("selectedList", index);
  };
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    localStorage.setItem("selectedTab", newValue);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getEntityTypeText = () => {
    if (selectedTab === 0) {
      return ["New Entity Type", "New Role", "New User"][selectedImg];
    } else if (selectedTab === 1) {
      return "New Email Template";
    } else if (selectedTab === 2) {
      return [
        "New Metrics",
        "New Trade Type",
        "New Plan Type",
        "New Bill Category",
        "New Subcontractor Category",
        "New Trade schedule",
      ][selectedList];
    }
    return "New Item";
  };
  const getselectboxentitychange = () => {
    if (selectedTab === 0) {
      return ["All Entity Types", "All Roles", "All User"][selectedImg];
    } else if (selectedTab === 1) {
      return "All Email Template";
    } else if (selectedTab === 2) {
      return [
        "All Metrics",
        "All Trade Type",
        "All Plan Type",
        "All Bill Category",
        "All Subcontractor Category",
        "All Trade schedule",
      ][selectedList];
    }
    return "New Item";
  };
  const getdialogtitlechange = () => {
    if (selectedTab === 0) {
      return ["Edit Entity Types", "Edit Roles", "Edit User"][selectedImg];
    } else if (selectedTab === 1) {
      return "Edit Email Templates";
    } else if (selectedTab === 2) {
      return [
        "Edit Trade Metrics",
        "Edit Trade Types",
        "Edit Plan Types",
        "Edit Bill Category",
        "Edit Subcontractor Category",
        "New Trade Schedule",
      ][selectedList];
    }
    return "New Item";
  };
  const handleOpenDialog = () => {
    if (getEntityTypeText() === "New User") {
      navigate("/sidebarsetting/newuserform");
    } else {
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <div className="addproject">
        <div className="addproject-main">
          {/* sec 1 */}
          <div className="project1-top1">
            <div>
              <h1 style={{ fontFamily: "sans-serif" }}>Settings</h1>
            </div>
            <div className="selectaddflex">
              <div>
                <select>
                  <option value="Active project">
                    {getselectboxentitychange()}
                  </option>
                  <option value="1">option1</option>
                  <option value="2">option2</option>
                  <option value="3">option3</option>
                </select>
              </div>
              <div
                className="addflex"
                style={{ textDecoration: "none" }}
                onClick={handleOpenDialog}
              >
                <button className="addbutton">
                  <img src={addbutton} alt="Add Sub" />
                </button>
                <span>{getEntityTypeText()}</span>
              </div>
            </div>
          </div>
          {/* sec 2 */}
          <section>
            <div className="setting-section">
              <Box>
                <Tabs
                  value={selectedTab}
                  onChange={handleTabChange}
                  indicatorColor="warning"
                  textColor="dark"
                  sx={{
                    "& .MuiTabs-indicator": {
                      height: "5px",
                      borderRadius: "10px",
                      backgroundColor: "#FCCD4C",
                    },
                  }}
                  className="tabs-container"
                >
                  <Tab label="Users and Permissions" className="tab" />
                  <Tab
                    label="Email Template"
                    className="tab"
                    style={{ margin: "0px 0px 0px 40px" }}
                  />
                  <Tab
                    label="Lists"
                    className="tab"
                    style={{ margin: "0px 0px 0px 40px" }}
                  />
                </Tabs>

                <Box style={{ padding: "3% " }}>
                  {selectedTab === 0 && (
                    <section>
                      <div className="tab1">
                        <Box display="flex" className="tablesidebar">
                          <Box className="sidesection ">
                            {options.map((option, index) => (
                              <p
                                key={index}
                                fullWidth
                                className="options-label"
                                onClick={() => handleOptionClick(index)}
                                style={{
                                  backgroundColor:
                                    selectedImg === index
                                      ? "#FCCD4C"
                                      : "inherit",
                                  color: "black",
                                  borderRadius:
                                    selectedImg === index ? "11px" : "inherit",
                                }}
                              >
                                {option.label}
                              </p>
                            ))}
                          </Box>
                          <Box flexGrow={1}>
                            {selectedTab === 0 && <CustomTable data={data} />}
                            {selectedTab === 1 && <CustomTable data={data} />}
                            {selectedTab === 2 && <CustomTable data={data} />}
                          </Box>
                        </Box>
                      </div>
                    </section>
                  )}
                  {selectedTab === 1 && <CustomTable data={data} />}
                  {selectedTab === 2 && (
                    <section>
                      <div className="tab1">
                        <Box display="flex" className="tablesidebar">
                          <Box className="sidesection">
                            {lists.map((lists, index) => (
                              <p
                                key={index}
                                fullWidth
                                className="options-label"
                                onClick={() => handleListClick(index)}
                                style={{
                                  backgroundColor:
                                    selectedList === index
                                      ? "#FCCD4C"
                                      : "inherit",
                                  color: "black",
                                  borderRadius:
                                    selectedList === index ? "11px" : "inherit",
                                }}
                              >
                                {lists.label}
                              </p>
                            ))}
                          </Box>
                          <Box flexGrow={1}>
                            {selectedList === 0 && <CustomTable data={data} />}
                            {selectedList === 1 && <CustomTable data={data} />}
                            {selectedList === 2 && <CustomTable data={data} />}
                            {selectedList === 3 && <CustomTable data={data} />}
                            {selectedList === 4 && <CustomTable data={data} />}
                            {selectedList === 5 && <CustomTable data={data} />}
                          </Box>
                        </Box>
                      </div>
                    </section>
                  )}
                </Box>
              </Box>
            </div>
          </section>

          <Dialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            className="plandialog"
          >
            <span
              className="dialogueclose"
              style={{ position: "fixed", top: "25.5%", right: "31.5%" }}
              onClick={handleCloseDialog}
            >
              <CloseIcon />
            </span>
            <DialogTitle className="dialoguetitle">
              {getdialogtitlechange()}
            </DialogTitle>
            <DialogContent>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "35px",
                  marginBottom: "20px",
                }}
              >
                <TextField
                  placeholder="Name*"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { height: "45px" },
                  }}
                />

                <FormControl fullWidth>
                  <MUISelect
                    value={selectedOption}
                    onChange={handleSelectChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ padding: "22.5px 1px" }}
                  >
                    <MenuItem value="" disabled>
                      <p style={{ opacity: "0.4" }}>Trade Type*</p>
                    </MenuItem>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </MUISelect>
                </FormControl>
              </Box>
            </DialogContent>

            <Button
              onClick={handleCloseDialog}
              className="Addbutton"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </Dialog>
        </div>
      </div>
    </>
  );
}
