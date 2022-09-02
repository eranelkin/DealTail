import React, { memo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import EmployeeRow from "./EmployeeRow/EmployeeRow";
import useTableSort from "./useTableSort";
import { useEmployees } from "./EmployeesContext";
import { translations } from "../../../translations/translations";

import "./employeesTable.scss";

const {
  employees: { headers },
} = translations;

const EmployeesTable = () => {
  const { employees } = useEmployees();
  const [search, setSearch] = useSearchParams();
  const [sortedEmployees, orderKey, orderDirection, onColumnSort] =
    useTableSort(
      employees,
      search.get("sort_by") || "salary",
      search.get("sort_order") || "asc"
    );

  useEffect(() => {
    if (!search.get("sort_by") || !search.get("sort_order")) {
      setSearch({
        sort_by: "salary",
        sort_order: "asc",
      });
    }
  }, [search]);

  return (
    <div>
      <Typography variant="h5" component="div" className="page-title">
        {translations.employees.title}
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 1400 }} className="">
        <Table sx={{ minWidth: 650 }} stickyHeader className="">
          <TableHead>
            <TableRow className="header-row">
              <TableCell style={{ width: 335 }}>{headers.name}</TableCell>
              <TableCell style={{ width: 235 }}>{headers.email}</TableCell>
              <TableCell style={{ width: 220 }} align="right">
                <TableSortLabel
                  active={orderKey === "salary"}
                  direction={orderKey === "salary" ? orderDirection : "asc"}
                  onClick={onColumnSort("salary")}
                >
                  {headers.salary}
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderKey === "rating"}
                  direction={orderKey === "rating" ? orderDirection : "asc"}
                  onClick={onColumnSort("rating")}
                >
                  {headers.rating}
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedEmployees &&
              sortedEmployees.map((employee) => {
                return <EmployeeRow key={employee.id} employee={employee} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default memo(EmployeesTable);
