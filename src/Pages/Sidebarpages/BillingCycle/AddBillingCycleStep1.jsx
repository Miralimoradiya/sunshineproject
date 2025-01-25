import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeleteIcon from "@mui/icons-material/Delete";

const data = [
  {
    id: "1",
    project: "Project’s 2819172829",
    period: "Standard",
    status: "Waiting for Revision",
  },
  {
    id: "2",
    project: "Project’s 2819172829",
    period: "VIP",
    status: "Open",
  },
  {
    id: "3",
    project: "Project’s 2819172829",
    period: "VIP",
    status: "Billed Signed",
  },
  {
    id: "4",
    project: "Project’s 2819172829",
    period: "Standard",
    status: "Open",
  },
  {
    id: "5",
    project: "Project’s 2819172829",
    period: "VIP",
    status: "Billed Signed",
  },
  {
    id: "6",
    project: "Project’s 2819172829",
    period: "Standard",
    status: "Waiting for Revision",
  },
  {
    id: "7",
    project: "Project’s 2819172829",
    period: "Standard",
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
      style: {
        borderRadius: "30px",
        height: "45px",
        width: "200px",
      },
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
const rows = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

export default function AddBillingCycleStep1({ showLeftPart, showRightPart }) {
  const [startDateFocused, setStartDateFocused] = useState(false);
  return (
    <div style={{ margin: "40px 0px 0px 0px" }}>
      {/* left part  */}
      {showLeftPart && (
        <>
          <section>
            <div className="planpage-section2">
              <TableContainer component={Paper} className="table-container">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox
                          sx={{
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
                      </TableCell>
                      <TableCell>
                        <div className="headertable">
                          <div className="header-content">
                            <span className="firstspan">Project</span>
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
                            <span className="firstspan">Bill Type</span>
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
                            <span className="firstspan">Ref. Num.</span>
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
                        <div className="headertable">
                          <div className="header-content">
                            <span className="firstspan">Amount</span>
                            <span className="secspan">Contains</span>
                          </div>
                          <div className="filter-icon">
                            <FilterListIcon />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="tablehead">Balance</p>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Checkbox
                            sx={{
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
                        </TableCell>
                        <TableCell>Boardway Circle</TableCell>
                        <TableCell>Braga</TableCell>
                        <TableCell>{row.period}</TableCell>
                        <TableCell>1234</TableCell>
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

                        <TableCell>$0</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </section>
        </>
      )}
      {/* right part  */}
      {showRightPart && (
        <>
          {/* top box  */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            margin="10px 20px 50px 10px"
            padding="15px 20px"
            sx={{ backgroundColor: "#FAFAFC", borderRadius: "15px" }}
          >
            <Checkbox
              sx={{
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
            <Typography fontWeight="600" fontFamily="sans-serif">
              Freedom Tower
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              gap="10px"
              alignItems="center"
            >
              <Typography fontWeight="600" fontFamily="sans-serif">
                Billing Cycle
              </Typography>
              <TextField
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "30px",
                    height: "45px",
                    width: "200px",
                  },
                }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="10px"
              alignItems="center"
            >
              <Typography fontWeight="600" fontFamily="sans-serif">
                Date
              </Typography>
              <DateInput
                focused={startDateFocused}
                setFocused={setStartDateFocused}
                placeholder=""
              />
            </Box>
            <Typography fontWeight="600" fontFamily="sans-serif">
              $55,500.00
            </Typography>
          </Box>

          {/* table  */}
          <div className="planpage-section2">
            <TableContainer component={Paper} className="table-container">
              <Table>
                <TableHead>
                  <TableRow style={{ backgroundColor: "#F8F8F8" }}>
                    <TableCell>Sub</TableCell>
                    <TableCell>Bill</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Amount Paid</TableCell>
                    <TableCell>Balance</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell>Braga</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>$55,500.00</TableCell>
                      <TableCell>$55,500.00</TableCell>
                      <TableCell>$0</TableCell>
                      <TableCell>
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </div>
  );
}
