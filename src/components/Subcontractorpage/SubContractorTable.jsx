import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { FaCheckCircle } from "react-icons/fa";

const SubContractorTable = ({ data }) => {
  return (
    <section>
      <div className="planpage-section2">
        <TableContainer component={Paper} className="table-container">
          <Table>
            <TableHead>
              <TableRow>
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
                      <span className="firstspan">Project Contact</span>
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
                      <span className="firstspan">Trade</span>
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
                      <span className="firstspan">Latest Plans</span>
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
                      <span className="firstspan">Contract</span>
                      <span className="secspan">Contains</span>
                    </div>
                    <div className="filter-icon">
                      <FilterListIcon />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Actions</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.projectcontracts}</TableCell>
                  <TableCell>{row.Trade}</TableCell>
                  <TableCell className="linking">{row.plans}</TableCell>
                  <TableCell>{row.Contract}</TableCell>
                  <TableCell>
                    <div className="deletecollumnsub">
                      <p>Place Hold</p>
                      <span style={{ padding: "0px 0px 0px 20px" }}>
                        <FaCheckCircle
                          style={{ color: "green", fontSize: "20px" }}
                        />
                      </span>
                    </div>
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

export default SubContractorTable;
