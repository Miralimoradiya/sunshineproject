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

const BillingTable = ({ data }) => {
  return (
    <section>
      <div className="planpage-section2">
        <TableContainer component={Paper} className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className="tablehead">id</p>
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
                      <span className="firstspan">Period</span>
                      <span className="secspan">Contains</span>
                    </div>
                    <div className="filter-icon">
                      <FilterListIcon />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Cut Off Date</p>
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
                  <p className="tablehead">Total Bills</p>
                </TableCell>
                <TableCell>
                  <p className="tablehead">Total Amount</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.project}</TableCell>
                  <TableCell>{row.period}</TableCell>
                  <TableCell>30/6/2020</TableCell>
                  <TableCell>
                    <p
                      className={`billingpage-billstatus ${
                        row.status === "Open"
                          ? "status-open"
                          : row.status === "Closed"
                          ? "status-closed"
                          : row.status === "Send to Owner"
                          ? "status-send-to-owner"
                          : ""
                      }`}
                    >
                      {row.status}
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="billingpage-billsrow">
                      <span>3</span>
                      <span>0</span>
                      <span>0</span>
                      <span>5</span>
                    </div>
                  </TableCell>

                  <TableCell>$50,000.00</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default BillingTable;
