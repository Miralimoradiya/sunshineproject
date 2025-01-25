// AddBills.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import AddBillingCycleStep1 from "./AddBillingCycleStep1";

const steps = ["Choose Bills", "Billing Cycle(s)"];

export default function AddBills({ open, onClose }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };
  return (
    <>
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
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ textAlign: "left" }}>
            Create New Billing Cycle(s)
          </Typography>
          <Typography style={{ textAlign: "right" }}>$50,000.00</Typography>
        </DialogTitle>

        <DialogContent className="Concretedialog">
          <Box className="stepsname1">
            {steps.map((step, index) => (
              <Typography
                key={index}
                variant="caption"
                className={`step-label ${
                  index <= activeStep ? "active-step" : "inactive-step"
                }`}
                sx={{ fontSize: "0.99rem" }}
              >
                {step}
              </Typography>
            ))}
          </Box>
          <Box position="relative" marginTop={2}>
            <LinearProgress
              variant="determinate"
              value={activeStep === 0 ? 20 : activeStep === 1 ? 80 : 0}
              className="progress-bar"
              sx={{
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#142534",
                },
              }}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              position="absolute"
              width="100%"
              top={-15}
              padding="0px 20%"
            >
              {steps.map((step, index) => (
                <Box key={index} textAlign="center">
                  <Box
                    component="span"
                    className={`step-indicator ${
                      index <= activeStep ? "active" : ""
                    }`}
                  >
                    {index <= activeStep + 1 ? (
                      <CheckIcon fontSize="small" />
                    ) : (
                      index + 1
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box marginTop={2}>
            {activeStep === 0 && (
              <AddBillingCycleStep1 showLeftPart={true} showRightPart={false} />
            )}
            {activeStep === 1 && (
              <AddBillingCycleStep1 showLeftPart={false} showRightPart={true} />
            )}
          </Box>
        </DialogContent>

        <Box className="customBox">
          {activeStep > 0 && (
            <>
              <Button
                className="nextbutton"
                onClick={handleBack}
                variant="contained"
              >
                Back
              </Button>
              <Button className="nextbutton" variant="contained">
                Select All
              </Button>
            </>
          )}

          <Button
            className="nextbutton"
            variant="contained"
            onClick={activeStep === steps.length - 1 ? onClose : handleNext}
          >
            {activeStep === steps.length - 1 ? "Create" : "Next"}
          </Button>
        </Box>
      </Dialog>
    </>
  );
}
