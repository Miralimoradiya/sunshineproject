import React, { useState, useRef } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InputAdornment from "@mui/material/InputAdornment";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  TextField,
  Box,
  FormControl,
  Select,
  MenuItem,
  Typography,
  InputBase,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdModeEditOutline } from "react-icons/md";
import { FaSearch, FaSave } from "react-icons/fa";
import { HiDocumentAdd } from "react-icons/hi";
import { PiLineVerticalBold } from "react-icons/pi";

const DateInput = ({ focused, setFocused, placeholder }) => (
  <TextField
    className="inputfields"
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

const SelectInput = ({
  value,
  handleChange,
  placeholder,
  clearSelection,
  iconPosition,
  border,
  deleteIcon,
}) => (
  <FormControl fullWidth>
    <Select
      className="inputfields"
      value={value}
      onChange={handleChange}
      displayEmpty
      sx={{
        "& fieldset": { border: border ? "true" : "none" },
      }}
      style={{
        position: "relative",
      }}
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value="">
        <p style={{ opacity: 0.4 }}>{placeholder}</p>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    {deleteIcon && deleteIcon.show && (
      <Box
        style={{
          position: "absolute",
          top: iconPosition.top || "20%",
          right: deleteIcon.position.right || "30px",
          fontSize: "20px",
          cursor: "pointer",
          color: "#B2B5B9",
        }}
      >
        <DeleteIcon onClick={clearSelection} />
        <PiLineVerticalBold />
      </Box>
    )}
    <CloseIcon
      style={{
        position: "absolute",
        top: iconPosition.top || "50%",
        right: iconPosition.right || "8%",
        fontSize: "18px",
        cursor: "pointer",
        color: "#B2B5B9",
      }}
      onClick={clearSelection}
    />
    <Box
      style={{
        position: "absolute",
        top: iconPosition.top || "50%",
        right: iconPosition.right || "30px",
        width: "2px",
        height: "20px",
        margin: "0px -7px 0px 3px",
        backgroundColor: "#B2B5B9",
      }}
    />
  </FormControl>
);

const rows = [
  { name: "Nyc Electrical" },
  { name: "Nyc Electrical" },
  { name: "Nyc Electrical" },
  { name: "Nyc Electrical" },
];

export default function Step1({
  showLeftPart,
  showRightPart,
  showsecondleftpart,
  forstep3section,
}) {
  const defaultText = `Hi Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Sapiente molestiae eligendi esse iusto earum, in as
   id voluptas ut, <br/>maxime quia neque quidem tempore atque iciendis. <br/>Itaque vel, ut odio eius sit pariatur modi nostrum inventore at.<br/> 
Thank you.`;

  const [startDateFocused, setStartDateFocused] = useState(false);
  const [endDateFocused, setEndDateFocused] = useState(false);
  const [priority, setPriority] = useState("");
  const [plan, setPlan] = useState("");
  const [emailTemplate, setEmailTemplate] = useState("");
  const [tableFloor, setTableFloor] = useState("");
  const [tradeTemplate, setTradeTemplate] = useState("");
  const [text, setText] = useState(defaultText);
  const [isEditing, setIsEditing] = useState();
  const quillRef = useRef();

  const handleChange = (value) => {
    setText(value);
  };
  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(text + " is Copied to clipboard");
    });
  };

  return (
    <>
      <section className="step1">
        {/* step1  */}
        {showLeftPart && (
          <Box className="left">
            {/* first left side content */}
            <DateInput
              className="inputfields"
              focused={startDateFocused}
              setFocused={setStartDateFocused}
              placeholder="Start Date"
            />
            <DateInput
              className="inputfields"
              focused={endDateFocused}
              setFocused={setEndDateFocused}
              placeholder="Close Date"
            />
            <SelectInput
              className="inputfields"
              value={priority}
              handleChange={(e) => setPriority(e.target.value)}
              placeholder="Priority"
              clearSelection={() => setPriority("")}
              iconPosition={{ top: "50%", right: "8%" }}
              border={true}
              deleteIcon={{ show: false }}
            />
            <Box className="lastinputs">
              <Typography variant="h6" gutterBottom>
                Template Variables
              </Typography>
              <Box className="box1">
                {["Close Date", "Priority*", "Close Date", "Priority*"].map(
                  (label, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        padding: "0px 0px 0px 10px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1">{label}</Typography>
                      <Box sx={{ display: "flex" }}>
                        <IconButton
                          aria-label="copy"
                          onClick={() => copyToClipboard(label)}
                        >
                          <ContentCopyIcon style={{ opacity: ".4" }} />
                        </IconButton>
                        <IconButton aria-label="copy">
                          <HiDocumentAdd style={{ opacity: ".4" }} />
                        </IconButton>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            </Box>
          </Box>
        )}

        {/* for step 2  */}
        {showsecondleftpart && (
          <Box className="left">
            <Box className="lastinputs">
              <Typography variant="h6" gutterBottom>
                Select Sub’s
              </Typography>
              <Box className="box1">
                <Box className="searchbar">
                  <InputBase placeholder="Search..." sx={{ flexGrow: 1 }} />
                  <FaSearch className="searchicon" />
                </Box>

                <Box>
                  {[
                    {
                      id: 1,
                      text: "Nyc Electrical",
                      subText: "Insurance Valid - Exp. 07/23/2020",
                    },
                    {
                      id: 2,
                      text: "Nyc Electrical",
                      subText: "Insurance Valid - Exp. 07/23/2020",
                    },
                    {
                      id: 3,
                      text: "Nyc Electrical",
                      subText: "Insurance Valid - Exp. 07/23/2020",
                    },
                    {
                      id: 4,
                      text: "Nyc Electrical",
                      subText: "Insurance Valid - Exp. 07/23/2020",
                    },
                  ].map((item) => (
                    <Box className="selectsubs" key={item.id}>
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
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body1" color="#142534">
                          {item.text}
                        </Typography>
                        <Typography variant="body2" color="#009DFF">
                          {item.subText}
                        </Typography>
                        {item.id === 3 && (
                          <button className="thirdidbutton">Edit Invite</button>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {/* right side  */}
        {showRightPart && (
          <Box className="right">
            <SelectInput
              className="inputfields"
              value={plan}
              handleChange={(e) => setPlan(e.target.value)}
              placeholder="Plans"
              clearSelection={() => setPlan("")}
              iconPosition={{ top: "50%", right: "7%" }}
              border={true}
              deleteIcon={{ show: false }}
            />
            <SelectInput
              className="inputfields"
              value={emailTemplate}
              handleChange={(e) => setEmailTemplate(e.target.value)}
              placeholder="Email Template"
              clearSelection={() => setEmailTemplate("")}
              iconPosition={{ top: "50%", right: "7%" }}
              border={true}
              deleteIcon={{ show: false }}
            />
            <TextField
              fullWidth
              className="inputfields"
              placeholder="Email Subject*"
            />

            <div className="editor">
              <Typography variant="h6" gutterBottom>
                Email Body
              </Typography>
              <IconButton
                className="editbutton"
                value={isEditing}
                onClick={toggleEdit}
              >
                {isEditing ? <FaSave /> : <MdModeEditOutline />}
              </IconButton>
              <div
                style={{
                  borderRadius: "15px",
                  border: "1px solid #ccc",
                  padding: "0px",
                }}
              >
                <ReactQuill
                  ref={quillRef}
                  readOnly={!isEditing}
                  className={`quill-container ${
                    isEditing ? "editable-text" : "readable-text"
                  }`}
                  value={text}
                  onChange={handleChange}
                  modules={{
                    toolbar: [["bold", "italic", "underline"], ["clean"]],
                  }}
                />

                <div className="bottomeditor"></div>
              </div>
            </div>
          </Box>
        )}
      </section>

      {/* step 3 */}
      {forstep3section && (
        <section className="step3">
          {/* Step 3 Content */}
          <div style={{ width: "40%" }}>
            <SelectInput
              className="inputfields"
              value={tradeTemplate}
              handleChange={(e) => setTradeTemplate(e.target.value)}
              placeholder="Trade Template"
              clearSelection={() => setTradeTemplate("")}
              iconPosition={{ top: "30%", right: "8%" }}
              border={true}
              deleteIcon={{ show: false }}
            />
          </div>

          {/* Step 3 Table */}
          <div className="step3table">
            <div className="table1">
              <TableContainer
                component={Paper}
                sx={{ border: "1px solid #B2B5B9" }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="with-border">Name*</TableCell>
                      <TableCell className="with-border">
                        <SelectInput
                          className="inputfields"
                          value={tableFloor}
                          handleChange={(e) => setTableFloor(e.target.value)}
                          placeholder="Floor 1"
                          clearSelection={() => setTableFloor("")}
                          iconPosition={{ top: "30%", right: "18%" }}
                          border={false}
                          deleteIcon={{
                            show: true,
                            position: { top: "20%", right: "26%" },
                          }}
                        />
                      </TableCell>
                      <TableCell className="with-border">
                        <SelectInput
                          className="inputfields"
                          value={tableFloor}
                          handleChange={(e) => setTableFloor(e.target.value)}
                          placeholder="Floor 2"
                          clearSelection={() => setEmailTemplate("")}
                          iconPosition={{ top: "30%", right: "18%" }}
                          border={false}
                          deleteIcon={{
                            show: true,
                            position: { top: "20%", right: "26%" },
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="with-border">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span>{row.name}</span>
                            <IconButton>
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        </TableCell>
                        <TableCell className="no-border"></TableCell>
                        <TableCell className="no-border"></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="table2">Add Story</div>
          </div>
          <div className="addmetrics">Add New Metrics</div>
        </section>
      )}
    </>
  );
}
