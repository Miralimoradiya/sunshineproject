import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import Step1 from "./Step1";

const steps = ["Invitation Settings", "Sub’s", "Metrics"];

const BidsLastDialogue = ({ open, onClose }) => {
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
      <DialogTitle className="dialoguetitle">Concrete</DialogTitle>
      <DialogContent
        className="Concretedialog"
        sx={{ padding: "0px" }}
      >
        {/* Steps display at the top */}
        <Box className="stepsname">
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

        {/* Full-width progress bar */}
        <Box position="relative" marginTop={2}>
          <LinearProgress
            variant="determinate"
            value={
              activeStep === 0
                ? 20
                : activeStep === 1
                ? 50
                : activeStep === 2
                ? 80
                : 0
            }
            className="progress-bar"
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#142534",
              },
            }}
          />

          {/* Step indicators over the progress bar */}
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

        {/* Content specific to each step */}

        <Box marginTop={2}>
          {activeStep === 0 && (
            <Step1
              showLeftPart={true}
              showRightPart={true}
              showsecondleftpart={false}
              forstep3section={false}
            />
          )}
          {activeStep === 1 && (
            <Step1
              showLeftPart={false}
              showRightPart={true}
              showsecondleftpart={true}
              forstep3section={false}
            />
          )}
          {activeStep === 2 && (
            <Step1
              showLeftPart={false}
              showRightPart={false}
              showsecondleftpart={false}
              forstep3section={true}
            />
          )}
        </Box>
      </DialogContent>

      {/* buttons  */}
      <Box className="customBox">
        {activeStep > 0 && (
          <Button
            className="backbutton"
            onClick={handleBack}
            variant="contained"
          >
            Back
          </Button>
        )}
        <Button
          className="nextbutton"
          variant="contained"
          onClick={activeStep === steps.length - 1 ? onClose : handleNext}
        >
          {activeStep === steps.length - 1 ? "Start Bid" : "Next"}
        </Button>
      </Box>
    </Dialog>
  );
};

export default BidsLastDialogue;
