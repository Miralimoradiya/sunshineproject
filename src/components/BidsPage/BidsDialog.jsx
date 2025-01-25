import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Chip,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
const tradeNames = [
  "Architect",
  "Architect Designer",
  "Concrete",
  "Designer",
  "Edited Trade Type",
  "Electric",
  "Framing",
  "Plumbing",
  "Roof Testing",
  "Roofing",
  "Architect Designer",
];
const bidders = ["otherBidder1", "otherBidder2", "hab", "roi"];
const existingBids = [
  "Boardway Circle",
  "Architect Designer",
  "Edited Trade Type",
  "Roof Testing",
  "Roofing",
  "Boardway Circle",
];
const excludeSubContractor = ["miya", "rat"];

const BidsDialog = ({ open, onClose }) => {
  const [bidderOptions, setBidderOptions] = useState(
    Array(tradeNames.length).fill("")
  );
  const [contractorOptions, setContractorOptions] = useState(
    Array(tradeNames.length).fill([])
  );
  const [names, setNames] = useState(Array(tradeNames.length).fill(""));
  const [name, setName] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [currentBidIndex, setCurrentBidIndex] = useState(0);
  const bidsPerPage = 2;
  const [age, setAge] = React.useState("");
  const [checked, setChecked] = useState(false);
  // Checkbox State
  const [checkedcheckbox, setCheckedcheckbox] = useState(false);

  const handleChange = (event) => {
    setCheckedcheckbox(event.target.checked);
  };

  const handleChangeage = (event) => {
    setAge(event.target.value);
  };
  const handleArrowLeft = () => {
    setCurrentBidIndex((prev) => Math.max(prev - bidsPerPage, 0));
  };

  const handleArrowRight = () => {
    setCurrentBidIndex((prev) =>
      Math.min(prev + bidsPerPage, existingBids.length - bidsPerPage)
    );
  };
  const displayedBids = existingBids.slice(
    currentBidIndex,
    currentBidIndex + bidsPerPage
  );

  const handleInputChange1 = (event) => {
    setName(event.target.value);
    setIsChanged(true);
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
    setIsChanged(true);
  };
  const handleContractorChange = (index, event) => {
    const {
      target: { value },
    } = event;
    setContractorOptions((prev) => ({
      ...prev,
      [index]: typeof value === "string" ? value.split(",") : value,
    }));
    setIsChanged(true);
  };
  const handleBidderChange = (index, event) => {
    const value = event.target.value;
    const updatedOptions = [...bidderOptions];
    updatedOptions[index] = value;
    setBidderOptions(updatedOptions);
    setIsChanged(true);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="bidsdialog"
      fullWidth
      maxWidth="lg"
    >
      <span className="dialogueclose" onClick={onClose}>
        <CloseIcon />
      </span>
      <DialogTitle className="dialoguetitle">New Bids</DialogTitle>
      <DialogContent>
        <Box
          className="reak"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ margin: "10px 0px 0px 0px" }}
        >
          <FormControl sx={{ m: 1, minWidth: 400 }}>
            <Select
              value={age}
              onChange={handleChangeage}
              displayEmpty
              className="dropdown"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">Select a Plan*</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {age && (
              <CloseIcon
                style={{
                  position: "absolute",
                  top: "14%",
                  right: "9%",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setAge("");
                }}
              />
            )}
          </FormControl>

          <TextField
            variant="outlined"
            placeholder="Search..."
            value={name}
            onChange={handleInputChange1}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon className="searchIcon" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <br />
        <Box>
          <TableContainer component={Paper} className="table-container">
            <Table sx={{ borderCollapse: "collapse" }}>
              <TableHead className="table-header">
                <TableRow>
                  <TableCell className="table-cell">Trade Name*</TableCell>
                  <TableCell className="table-cell">Bidder*</TableCell>
                  <TableCell className="table-cell">Name*</TableCell>
                  <TableCell className="table-cell">Existing Bids</TableCell>
                  <TableCell className="table-cell">
                    Exclude Sub-Contractor
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="tablebodyy">
                {tradeNames.map((trade, index) => (
                  <TableRow key={index}>
                    <TableCell className="table-cell">
                      <Checkbox
                        checked={checkedcheckbox}
                        onChange={handleChange}
                        sx={{
                          marginRight: "11px",
                          color: "#7b7a7a",
                          "&.Mui-checked": {
                            color: "#FCCD4C",
                            backgroundColor: "black",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 18,
                            scale: "1.4",
                          },
                          "&.MuiCheckbox-root": {
                            borderRadius: 0,
                            padding: 0,
                          },
                        }}
                      />

                      {trade}
                    </TableCell>
                    <TableCell className="table-cell">
                      <FormControl fullWidth>
                        <Select
                          fullWidth
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          value={bidderOptions[index] || ""}
                          onChange={(event) => handleBidderChange(index, event)}
                          sx={{
                            "& fieldset": { border: "none" },
                          }}
                        >
                          <MenuItem value="">
                            <p style={{ opacity: 0.4 }}>Select Bidder</p>
                          </MenuItem>
                          {bidders.map((bidder, bidderIndex) => (
                            <MenuItem key={bidderIndex} value={bidder}>
                              {bidder}
                            </MenuItem>
                          ))}
                        </Select>
                        {bidderOptions[index] && (
                          <CloseIcon
                            style={{
                              position: "absolute",
                              top: "32%",
                              right: "19%",
                              fontSize: "18px",
                              cursor: "pointer",
                              opacity: "0.4",
                            }}
                            onClick={() => {
                              const updatedOptions = [...bidderOptions];
                              updatedOptions[index] = "";
                              setBidderOptions(updatedOptions);
                            }}
                          />
                        )}
                      </FormControl>
                    </TableCell>
                    <TableCell className="table-cell">
                      <TextField
                        placeholder="name*"
                        value={names[index]}
                        onChange={(event) => handleInputChange(index, event)}
                        fullWidth
                        sx={{
                          "& fieldset": { border: "none" },
                        }}
                      />
                    </TableCell>
                    <TableCell className="table-cell">
                      {index === 0 ? (
                        <>
                          <IconButton
                            className="leftarrow"
                            size="small"
                            onClick={handleArrowLeft}
                          >
                            <IoIosArrowBack />
                          </IconButton>

                          <Box>
                            {displayedBids.map((bid, bidIndex) => (
                              <Box key={bidIndex} className="existingbids">
                                <b>{bid}</b>
                              </Box>
                            ))}
                          </Box>
                          <IconButton
                            className="rightarrow"
                            size="small"
                            onClick={handleArrowRight}
                          >
                            <IoIosArrowForward />
                          </IconButton>
                        </>
                      ) : (
                        <span>{""}</span>
                      )}
                    </TableCell>
                    <TableCell className="table-cell">
                      <Box className="lastcollumn">
                        <div className="switching">
                          <span id="label">
                            {checked ? "include" : "exclude"}
                          </span>
                          <Switch
                            checked={checked}
                            onChange={(event) =>
                              setChecked(event.target.checked)
                            }
                          />
                        </div>
                        <div class="line"></div>
                        <FormControl fullWidth>
                          <Select
                            multiple
                            value={contractorOptions[index] || []}
                            onChange={(event) =>
                              handleContractorChange(index, event)
                            }
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            sx={{ "& fieldset": { border: "none" } }}
                            renderValue={(selected) =>
                              selected.length === 0 ? (
                                <p style={{ opacity: 0.4 }}>Select Bidder</p>
                              ) : (
                                <Box>
                                  {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                  ))}
                                </Box>
                              )
                            }
                          >
                            {excludeSubContractor.map((exclude) => (
                              <MenuItem key={exclude} value={exclude}>
                                <Checkbox
                                  checked={contractorOptions[index]?.includes(
                                    exclude
                                  )}
                                />
                                {exclude}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </DialogContent>
      <Button
        className="Addbutton"
        variant="contained"
        color="primary"
        onClick={onClose}
      >
        Create Bid(s)
      </Button>
    </Dialog>
  );
};

export default BidsDialog;
