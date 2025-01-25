import React, { useState } from "react";
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
import { IoIosArrowForward } from "react-icons/io";

const BidsTable = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleToggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  const staticdata = [
    { id: 1, name: "Alice", age: 24, contactnumber: 9033092331 },
    { id: 2, name: "Bob", age: 30, contactnumber: 9033092331 },
    { id: 3, name: "Charlie", age: 28, contactnumber: 9033092331 },
  ];
  return (
    <section>
      <div className="planpage-section2">
        <TableContainer component={Paper} className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" align="center"></TableCell>
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
                      <span className="firstspan">Priority</span>
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
                      <span className="firstspan">Bidder</span>
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
                  <p className="tablehead">Start Date</p>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Close Date</p>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Contract Date</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    <TableCell>
                      <code onClick={() => handleToggleRow(row.id)}>
                        <IoIosArrowForward
                          style={{
                            transition: "transform 0.3s",
                            transform:
                              expandedRow === row.id
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                          }}
                        />
                      </code>
                    </TableCell>
                    <TableCell>{row.projectid}</TableCell>
                    <TableCell>{row.trade}</TableCell>
                    <TableCell
                      className="linking"
                      style={{
                        color: row.priority === "High" ? "red" : "#009DFF",
                      }}
                    >
                      {row.priority}
                    </TableCell>
                    <TableCell>Sunshine</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>30/6/2020</TableCell>
                    <TableCell>30/6/2020</TableCell>
                    <TableCell>30/6/2020</TableCell>
                  </TableRow>
                  {expandedRow === row.id && (
                    <TableCell colSpan={9}>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>ID</TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell>Age</TableCell>
                              <TableCell>contactnumber</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {staticdata.map((dataa) => (
                              <TableRow key={dataa.id}>
                                <TableCell>{dataa.id}</TableCell>
                                <TableCell>{dataa.name}</TableCell>
                                <TableCell>{dataa.age}</TableCell>
                                <TableCell>{dataa.contactnumber}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </TableCell>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default BidsTable;
