import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
} from "@mui/material";
import folderlogo from "../../assets/add projecct/folder.svg";
import { PiLineVerticalLight } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import img1 from "../../assets/add projecct/all-bong-L2oedF1AsH8-unsplash.png";
import img2 from "../../assets/add projecct/lance-anderson-QdAAasrZhdk-unsplash.png";
import img3 from "../../assets/add projecct/liam-martens-7sKwcvyXvr8-unsplash.png";
import img4 from "../../assets/add projecct/luca-bravo-SRjZtxsK3Os-unsplash (1).png";
import img5 from "../../assets/add projecct/simone-hutsch-_wpce-AsLxk-unsplash.png";
import img6 from "../../assets/add projecct/simone-hutsch-jbyLu_fh5fY-unsplash.png";
import { useDropzone } from "react-dropzone";

// Folder data
const imageFolders = ["Default"];
const dropboxFolders = [
  "Bills pdf",
  "Contract pdf",
  "Images",
  "Plan pdf",
  "Project pdf",
  "Contractor pdf",
];

const images = [img1, img2, img3, img4, img5, img6];

const ImagesPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const currentFolders = selectedTab === 0 ? imageFolders : dropboxFolders;
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div className="imagesage">
      <Box className="container">
        <Box className="sidebar">
          <List>
            {currentFolders.map((folder, index) => (
              <ListItem button key={index} className="folder-item">
                <img
                  src={folderlogo}
                  alt="folder icon"
                  className="folder-icon"
                />
                <ListItemText primary={folder} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <Box className="main-content">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="warning"
            textColor="dark"
            className="tabs"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#FCCD4C",
              },
            }}
          >
            <Tab label="Images" />
            <Tab label="Dropbox" />
          </Tabs>

          {/* Images */}
          {selectedTab === 0 && (
            <>
              <Box {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <Typography className="upload">
                  <IoMdCloudUpload /> Upload Image or Drag and Drop
                </Typography>
              </Box>
              <Box>
                <Grid className="griding">
                  {images.map((image, index) => (
                    <Grid
                      item
                      xs={6}
                      key={index}
                      style={{ position: "relative" }}
                    >
                      <img
                        src={image}
                        alt={`image-${index}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <Box
                        style={{
                          position: "absolute",
                          bottom: 10,
                          right: 10,
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "center",
                          padding: "8px 10px 8px 10px",
                          color: "white",
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>
                          <MdOutlineFileDownload /><PiLineVerticalLight />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          )}

          {/* Dropbox  */}
          {selectedTab === 1 && (
            <Box>
              <Grid className="griding">
                {images.slice(0, 6).map((image, index) => (
                  <Grid item xs={6} key={index} style={{ position: "relative" }}>
                    <img
                      src={image}
                      alt={`image-${index}`}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <Box
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 10px 8px 10px",
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                      }}
                    >
                      <MdOutlineFileDownload />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default ImagesPage;
