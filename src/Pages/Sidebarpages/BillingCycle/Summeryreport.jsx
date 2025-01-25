import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  Typography,
  Collapse,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import { GoDownload } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";
import imgpdf from "../../../assets/add projecct/file.svg";
import { styled } from "@mui/system";

const StyledTableContainer = styled(TableContainer)({
  borderRadius: "8px",
  overflow: "hidden",
  border: "1px solid #ccc",
});

export default function Summeryreport({ open, onClose }) {
  const [opendiv, setOpendiv] = useState(true);
  const [opendiv2, setOpendiv2] = useState(true);

  const handleToggle = () => {
    setOpendiv((prev) => !prev);
  };
  const handleTogglediv2 = () => {
    setOpendiv2((prev) => !prev);
  };
  const iconStyle = {
    transition: "transform 0.3s ease", 
    transform: opendiv ? "rotate(0deg)" : "rotate(270deg)",
  };
  const iconStyle2 = {
    transition: "transform 0.3s ease", 
    transform: opendiv2 ? "rotate(0deg)" : "rotate(270deg)",
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
      <DialogTitle
        className="dialoguetitle"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>Broga</p>
          <p style={{ fontSize: "14px", color: "#BEBEBE" }}>
            Broadway Circle - Bill #4
          </p>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <b style={{ fontSize: "20px" }}>$50,000.00</b>
          <Button
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: "20px",
              color: "#142534",
              padding: "8px 12px",
              textTransform: "inherit",
              "&:hover": {
                backgroundColor: "#d0d0d0",
              },
            }}
          >
            <LaunchIcon />
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box className="dialog-content">
          {/* box 1 */}
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <h2 style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                Bills #4
              </h2>
              <button
                onClick={handleToggle}
                style={{
                  border: "none",
                  padding: "3px 10px 0px 10px",
                  borderRadius: "19px",
                  cursor: "pointer",
                }}
              >
                <ExpandMoreIcon style={{ ...iconStyle,fontSize: "35px" }} />
              </button>
            </Box>
            <Collapse in={opendiv}>
              <Box sx={{ marginTop: "16px" }}>
                <Box style={{ maxWidth: "600px" }}>
                  <Box mb={4} border="2px solid white">
                    <Grid container spacing={10}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="textSecondary">
                          Project*
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          Broadway Circle
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="textSecondary">
                          Vendor*
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          Braga
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box mb={4}>
                    <Grid container spacing={10}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="textSecondary">
                          Amount*
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="textSecondary">
                          Period
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          30/6/2020 - 30/6/2020
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box mb={2}>
                    <Typography variant="body2" color="textSecondary">
                      Vendor Note
                    </Typography>
                    <Typography variant="body2" fontWeight="600">
                      The Price Excluding the basement, Cause we never saw the
                      new plans.
                    </Typography>
                  </Box>
                  <Box
                    width="16%"
                    padding="10px 0px"
                    mt={4}
                    borderRadius="12px"
                    border="2px solid #B2B5B9"
                    textAlign="center"
                  >
                    <img src={imgpdf} alt="" />
                    <div className="pdfpopover">
                      <GoDownload />
                      <PiLineVertical />
                      <FaEye />
                    </div>
                  </Box>
                </Box>
              </Box>
            </Collapse>
          </Box>

          {/* box 2  */}
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <h2 style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
                G702 - G703
              </h2>
              <button
                onClick={handleTogglediv2}
                style={{
                  border: "none",
                  padding: "3px 10px 0px 10px",
                  borderRadius: "19px",
                  cursor: "pointer",
                }}
              >
                <ExpandMoreIcon style={{ ...iconStyle2, fontSize: "35px" }} />
              </button>
            </Box>
            <Collapse in={opendiv2}>
              <Box sx={{ marginTop: "16px" }}>
                <Box>
                  <div
                    style={{ margin: "0px 0px 30px 0px", maxWidth: "750px" }}
                  >
                    <Typography variant="body2" fontWeight="600">
                      Contract
                    </Typography>
                    <hr
                      style={{ margin: "7px 0px", border: "2px solid #B2B5B9" }}
                    />
                    <Grid container spacing={19}>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Original Contract*
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Change Order
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Sum Contract
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div
                    style={{ margin: "0px 0px 30px 0px", maxWidth: "750px" }}
                  >
                    <Typography variant="body2" fontWeight="600">
                      Completed
                    </Typography>
                    <hr
                      style={{ margin: "7px 0px", border: "2px solid #B2B5B9" }}
                    />
                    <Grid container spacing={19}>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Total Completed
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Retainage
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Total Earned
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <div
                    style={{ margin: "0px 0px 30px 0px", maxWidth: "750px" }}
                  >
                    <Typography variant="body2" fontWeight="600">
                      Bill
                    </Typography>
                    <hr
                      style={{ margin: "7px 0px", border: "2px solid #B2B5B9" }}
                    />
                    <Grid container spacing={19}>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Previous Bills
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Current Payment Due
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="textSecondary">
                          Balance to Finish
                        </Typography>
                        <Typography variant="body2" fontWeight="600">
                          $50,000.00
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>

                  <StyledTableContainer component={Paper}>
                    <Table>
                      <TableHead style={{ backgroundColor: "#F8F8F8" }}>
                        <TableRow>
                          <TableCell style={{ border: "1px solid #ccc" }}>
                          Description of Work*
                          </TableCell>
                          <TableCell style={{ border: "1px solid #ccc" }}>
                          Scheduled Values*
                          </TableCell>
                          <TableCell style={{ border: "1px solid #ccc" }}>
                          Privious
                          </TableCell>
                          <TableCell style={{ border: "1px solid #ccc" }}>
                          Current*
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Concrete #1</TableCell>
                          <TableCell>$50,000.00</TableCell>
                          <TableCell>$50,000.00</TableCell>
                          <TableCell>$0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Concrete #2</TableCell>
                          <TableCell>$50,000.00</TableCell>
                          <TableCell>$50,000.00</TableCell>
                          <TableCell>$100.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Concrete #3</TableCell>
                          <TableCell>$50,000.00</TableCell>
                          <TableCell>$50,000.00</TableCell>
                          <TableCell>$0</TableCell>
                        </TableRow>
                      </TableBody>
                      <TableFooter style={{ backgroundColor: "#F8F8F8" }}>
                        <TableRow>
                          <TableCell>Total</TableCell>
                          <TableCell>$1,50,000.00</TableCell>
                          <TableCell>$1,50,000.00</TableCell>
                          <TableCell>$100.00</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </StyledTableContainer>

                  <div style={{ marginTop: "20px" }}>
                    <Typography variant="h6" >Bills</Typography>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      <Box>
                        <Typography variant="body2">
                        Signed Bills
                        </Typography>
                        <Box
                          padding="10px 0px"
                          borderRadius="12px"
                          border="2px solid #B2B5B9"
                          textAlign="center"
                          margin="10px 50px 0px 0px"
                        >
                          <img src={imgpdf} alt="PDF 1" />
                          <div className="pdfpopover1">
                            <GoDownload />
                            <PiLineVertical />
                            <FaEye />
                          </div>
                        </Box>
                      </Box>

                      <Box>
                        <Typography variant="body2" >
                        Bills
                        </Typography>
                        <Box
                          padding="10px 0px"
                          borderRadius="12px"
                          border="2px solid #B2B5B9"
                          textAlign="center"
                           margin="10px 0px 0px 0px"
                        >
                          <img src={imgpdf} alt="PDF 2" />
                          <div className="pdfpopover1">
                            <GoDownload />
                            <PiLineVertical />
                            <FaEye />
                          </div>
                        </Box>
                      </Box>
                    </div>
                  </div>
                </Box>
              </Box>
            </Collapse>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
