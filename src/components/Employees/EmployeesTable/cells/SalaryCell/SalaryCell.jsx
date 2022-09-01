import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const SalaryCell = ({ salary }) => {
  const parseValue = Intl.NumberFormat("en-GB", {
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <Typography variant="body2" component="div">
      {parseValue.format(Number(salary))}
    </Typography>
  );
};

SalaryCell.propTypes = {
  salary: PropTypes.number.isRequired,
};

export default SalaryCell;
