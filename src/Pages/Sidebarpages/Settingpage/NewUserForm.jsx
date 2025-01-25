import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Tab,
  Tabs,
  Button,
  Box,
  Typography,
  Checkbox,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";

const options = [
  "Add User",
  "Edit User",
  "View User List",
  "View User Detail",
  "Delete User",
  "Change Status User",
];
const placeholders = [
  "Entity Type*",
  "Phone Number*",
  "Entity*",
  "Email*",
  "First Name*",
  "Password*",
  "Last Name*",
  "Confirm Password*",
];

export default function NewUserForm() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [checked, setChecked] = useState(Array(options.length).fill(false));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCheckAll = () => {
    const newChecked = !checked.every(Boolean);
    setChecked(Array(options.length).fill(newChecked));
  };

  const handleCheckboxChange = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <>
      <div className="addproject">
        <div className="addproject-main">
          <div className="newuserform">
            {/* section 1  */}
            <div className="addproject-top1">
              <div className="setting-newuser">
                <h1>
                  <Link to="/sidebarsetting">
                    <ArrowBackIosIcon style={{ margin: "-3px 10px 0px 0px" }} />{" "}
                    New User
                  </Link>
                </h1>
              </div>

              <div className="selectaddflex">
                <Button className="cancel">
                  <b>Cancel</b>
                </Button>

                <Button className="save">
                  <Link to="/sidebarsetting">Submit</Link>
                </Button>
              </div>
            </div>
            {/* section 2 */}
            <div className="new-user">
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
                <Tab label="New User" className="tab" />
              </Tabs>
              <div className="newusertab">
                {/* top tab  */}
                <div
                  style={{
                    padding: "30px 10px",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "30px",
                  }}
                >
                  {placeholders.map((placeholder, index) => (
                    <TextField
                      key={index}
                      placeholder={placeholder}
                      variant="outlined"
                      fullWidth
                      InputProps={{ style: { height: "45px" } }}
                    />
                  ))}
                </div>
                {/* middle box  */}
                <Box
                  sx={{
                    backgroundColor: "#FAFAFC",
                    padding: "30px 30px 10px",
                    borderRadius: "20px",
                  }}
                >
                  <Typography variant="h5">Assigned Roles*</Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                    paddingY="20px"
                  >
                    <Box display="flex" alignItems="center">
                      <Checkbox
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
                      <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                        Super Admin Roles
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        width: 200,
                        height: 45,
                        backgroundColor: "#142534",
                        color: "white",
                        borderRadius: 20,
                        textTransform: "capitalize",
                      }}
                    >
                      Get Permission
                    </Button>
                    <Typography variant="h5" paddingTop="20px">
                      Access Permissions
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Search Permission"
                      sx={{ width: 450 }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon className="searchIcon" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </div>
              {/* bottom section  */}
              <Box padding="30px 0px 5.5% 0px">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  padding="20px 40px 20px 6%"
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                    Items
                  </Typography>
                  <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                    Permissions
                  </Typography>
                  <div style={{ width: "300px" }}></div>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  padding="40px 40px 40px 6%"
                  borderTop="3px solid #ccc"
                  borderBottom="3px solid #ccc"
                  alignItems="center"
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                    User
                  </Typography>

                  <div>
                    {options.map((option, index) => (
                      <Box key={index} display="flex" alignItems="center">
                        <Checkbox
                          checked={checked[index]}
                          onChange={() => handleCheckboxChange(index)}
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
                        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                          {option}
                        </Typography>
                      </Box>
                    ))}
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleCheckAll}
                      sx={{
                        width: 200,
                        height: 45,
                        backgroundColor: "#142534",
                        color: "white",
                        borderRadius: 20,
                        textTransform: "capitalize",
                      }}
                    >
                      Check All
                    </Button>
                  </div>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}