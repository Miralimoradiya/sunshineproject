import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import { padding, styled, width } from "@mui/system";

const CenteredDialogTitle = styled(DialogTitle)({
    textAlign: "center",
    margin:"0px 0px -10px 0px"
  });

  const StyledDialog = styled(Dialog)({
    '& .MuiDialog-paper': {
      borderRadius: '16px', 
      padding:"10px 0px",
    },
  });
  

const StyledButton = styled(Button)(({ confirm }) => ({
  borderRadius: "20px",
  margin: "10px 8px 20px 0px",
  width: "40%",
  border: "1px solid black",
  color: confirm ? "#fff" : "#142534",
  backgroundColor: confirm ? "#142534" : "#fff",
  "&:hover": {
    color: confirm ? "#142534" : "#fff",
    backgroundColor: confirm ? "#fff" : "#142534",
  },
}));

const PlanDeleteDialog = ({ open, onClose, onConfirm }) => (
  <StyledDialog open={open} onClose={onClose}>
    <CenteredDialogTitle>
      <Typography variant="h6">Are you sure?</Typography>
    </CenteredDialogTitle>
    <DialogContent>
      <DialogContentText>You want to delete this plan ?</DialogContentText>
    </DialogContent>
    <DialogActions style={{ justifyContent: "center" }}>
      <StyledButton onClick={onClose} color="primary">
        No
      </StyledButton>
      <StyledButton onClick={onConfirm} confirm color="primary">
        Yes
      </StyledButton>
    </DialogActions>
  </StyledDialog>
);

export default PlanDeleteDialog;
