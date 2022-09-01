import React, { memo } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";
import NameCell from "../cells/NameCell/NameCell";
import RatingCell from "../cells/RatingCell/RatingCell";
import SalaryCell from "../cells/SalaryCell/SalaryCell";
import Link from "@mui/material/Link";

const EmployeeRow = ({ employee }) => {
  return (
    <TableRow hover style={{ height: 76 }}>
      <TableCell>
        <NameCell employee={employee} />{" "}
      </TableCell>
      <TableCell>
        <Link href={`mailto:${employee.email}`}>{employee.email}</Link>
      </TableCell>
      <TableCell align="right">
        <SalaryCell salary={employee.salary} />
      </TableCell>
      <TableCell align="right">
        <RatingCell employeeId={employee.id} rating={employee.rating} />
      </TableCell>
    </TableRow>
  );
};

EmployeeRow.propTypes = {
  employee: PropTypes.shape({}),
};

export default memo(EmployeeRow);
