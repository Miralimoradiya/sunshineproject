import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import deletebutton from "../../assets/project1/delete.svg";
import tick1 from "../../assets/project1/tick-1.svg";
import { useNavigate } from "react-router-dom";


const Section2 = ({ data, onRowSelect  }) => {
  const navigate = useNavigate();
  const handleRowClick = (row) => {
    console.log(row.id);
    navigate(`/addproject/${row.id}`, { state: { rowData: row } });
  };

  return (
    <section>
      <div className="project1-section2">
        <TableContainer
          component={Paper}
          className="table-container"
          style={{ borderRadius: "20px" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <div>
                    <Checkbox />
                    <span className="tablehead">ID</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="headertable">
                    <div className="header-content">
                      <span className="firstspan">Name</span>
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
                      <span className="firstspan">Address</span>
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
                      <span className="firstspan">Owner</span>
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
                      <span className="firstspan">Site Manager</span>
                      <span className="secspan">Contains</span>
                    </div>
                    <div className="filter-icon">
                      <FilterListIcon />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Active</p>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Action</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} onClick={() => handleRowClick(row)}>
                  <TableCell padding="checkbox" className="project1-table-cell">
                    <label className="checking">
                      <input type="checkbox" className="checkbox" />
                      <span className="checkbox-indicator"></span>
                      <span>{row.id}</span>
                      <img
                        src={row.img}
                        alt=""
                        style={{
                          width: "50px",
                          height: "auto",
                          marginLeft: "20px",
                        }}
                      />
                    </label>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>{row.siteManager}</TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <img src={tick1} alt="" className="tickmark" />
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <img src={deletebutton} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default Section2;
