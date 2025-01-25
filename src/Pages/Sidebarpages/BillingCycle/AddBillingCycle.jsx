import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LaunchIcon from "@mui/icons-material/Launch";
import Summeryreport from "./Summeryreport";
import AddBills from "./AddBills";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";

const data = [
  {
    id: "1",
   refnum:"990909",
    status: "Waiting for Revision",
  },
  {
    id: "2",
    refnum:"866676",
    status: "Open",
  },
  {
    id: "3",
    refnum:"787878",
    status: "Billed Signed",
  },
  {
    id: "4",
    refnum:"7878798",
    status: "Open",
  },
  {
    id: "5",
    refnum:"5678",
    status: "Open",
  },
];

const DateInput = ({ focused, setFocused, placeholder }) => (
  <TextField
    type={focused ? "date" : "text"}
    placeholder={focused ? "" : placeholder}
    InputLabelProps={{ shrink: true }}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    InputProps={{
      endAdornment: !focused && (
        <InputAdornment
          position="end"
          sx={{ padding: "0px 13px 0px 0px", opacity: "0.7" }}
        >
          <CalendarMonthIcon sx={{ fontSize: "1rem" }} />
        </InputAdornment>
      ),
    }}
    fullWidth
  />
);

const CustomSelect = ({ value, onChange, placeholder, options }) => {
  return (
    <FormControl>
      <Select
        value={value || ""}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <p style={{ opacity: 0.4 }}>{placeholder}</p>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {value && (
        <CloseIcon
          style={{
            position: "absolute",
            top: "30%",
            right: "5%",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={() => onChange({ target: { value: "" } })}
        />
      )}
    </FormControl>
  );
};

export default function AddBillingCycle() {
  const [age, setAge] = React.useState("");
  const [openAddBills, setOpenAddBills] = useState(false);
  const [openSummaryReport, setOpenSummaryReport] = useState(false);
  const [selectedTab, setSelectedTab] = useState(() => {
    return parseInt(localStorage.getItem("selectedTab")) || 0;
  });
  const [startDateFocused, setStartDateFocused] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    localStorage.setItem("selectedTab", newValue);
  };
  const handleOpenAddBills = () => setOpenAddBills(true);
  const handleCloseAddBills = () => setOpenAddBills(false);

  const handleOpenSummaryReport = () => setOpenSummaryReport(true);
  const handleCloseSummaryReport = () => setOpenSummaryReport(false);
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="addproject">
        <div className="addproject-main">
          {/* header  */}
          <Box className="addproject-top1">
            <Box>
              <h1 style={{ fontFamily: "sans-serif", display:"flex", flexDirection:"row", gap:"40px" }}>
                <Link to="/sidebarbillingcycle">
                  <ArrowBackIosIcon /> Broadway Circle - Billing Cycle #1
                </Link>
                <button style={{padding:"3px 20px", backgroundColor:"#29c397", color:"white", border:"none", borderRadius:"20px"}}>Open</button>
              </h1>
              <Box padding="6px 30px" style={{ opacity: "0.5" }}>
                <p>30/6/2020 - 30/6/2020</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "23px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#142534",
                  borderRadius: "38px",
                  color: "white",
                  padding: "9px 20px",
                  textTransform: "inherit",
                }}
                onClick={handleOpenAddBills}
              >
                <p>Add Bills To Cycles</p>
              </Button>
              <Button
                sx={{
                  backgroundColor: "#142534",
                  borderRadius: "38px",
                  color: "white",
                  padding: "9px 20px",
                  textTransform: "inherit",
                }}
                onClick={handleOpenSummaryReport}
              >
                <p>Summary Report</p>
              </Button>
              <Button
                sx={{
                  border: "2px solid #142534",
                  borderRadius: "38px",
                  color: "#142534",
                  padding: "3px 20px 0px 20px",
                  textTransform: "inherit",
                }}
              >
                <p>
                  <LaunchIcon />
                </p>
              </Button>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: "white", borderRadius: "12px" }}>
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
                  margin: "0px 0px 0px 0px",
                },
              }}
              className="tabs-container"
            >
              <Tab label="Billing Cycle Details" />
              <Tab
                label="Payments"
                className="tab"
                style={{ margin: "0px 0px 0px 40px" }}
              />
            </Tabs>
            {selectedTab === 0 && (
              <>
                <Box
                  className="addbillingcycleinputfields"
                  margin="40px"
                  padding="20px"
                  display="flex"
                  flexDirection="row"
                  gap="60px"
                  sx={{ backgroundColor: "#FAFAFC", borderRadius: "12px" }}
                >
                  <Box
                    width="50%"
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                  >
                    <CustomSelect
                      value={age}
                      onChange={handleChangeAge}
                      placeholder="Select a Plan*"
                      options={[10, 20, 30]}
                    />
                    <DateInput
                      focused={startDateFocused}
                      setFocused={setStartDateFocused}
                      placeholder="Period"
                    />
                  </Box>
                  <Box
                    width="50%"
                    display="grid"
                    gridTemplateColumns="repeat(2,1fr)"
                    gap="20px"
                  >
                    {[
                      "Submit Bills",
                      "Submit to Owner",
                      "Checks Ready",
                      "Checks Entered",
                    ].map((placeholder, index) => (
                      <DateInput
                        key={index}
                        focused={startDateFocused}
                        setFocused={setStartDateFocused}
                        placeholder={placeholder}
                      />
                    ))}
                  </Box>
                </Box>
                <div
                  className="addbillingcycleinputfields"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "0px 40px 40px 0px",
                  }}
                >
                  <CustomSelect
                    value={age}
                    onChange={handleChangeAge}
                    placeholder="All Billing Cycles"
                    options={[10, 20, 30]}
                  />
                </div>
                <div className="planpage-section2">
                  <TableContainer component={Paper} className="table-container">
                    <Table>
                      <TableHead>
                        <TableRow>
                         
                          <TableCell>
                            <div className="headertable">
                              <div className="header-content">
                                <span className="firstspan">Sub</span>
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
                                <span className="firstspan">Ref Number</span>
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
                                <span className="firstspan">Status</span>
                                <span className="secspan">Contains</span>
                              </div>
                              <div className="filter-icon">
                                <FilterListIcon />
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <p className="tablehead">Amount</p>
                          </TableCell>
                          <TableCell>
                            <p className="tablehead">Submitted</p>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>Braga</TableCell>
                            <TableCell>{row.refnum}</TableCell>
                            
                            <TableCell>
                              <p
                                className={`billingpage-billstatus ${
                                  row.status === "Open"
                                    ? "status-open"
                                    : row.status === "Billed Signed"
                                    ? "status-billed"
                                    : row.status === "Waiting for Revision"
                                    ? "status-send-to-owner"
                                    : ""
                                }`}
                              >
                                {row.status}
                              </p>
                            </TableCell>
                            <TableCell>$50,000.00</TableCell>
                            <TableCell>$50,000.00</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </>
            )}
            {selectedTab === 1 && <div>hello</div>}
          </Box>

          {/* last 2  */}
          {/* Add Bills Dialog */}
          <AddBills open={openAddBills} onClose={handleCloseAddBills} />
          <Summeryreport
            open={openSummaryReport}
            onClose={handleCloseSummaryReport}
          />
        </div>
      </div>
    </>
  );
}
