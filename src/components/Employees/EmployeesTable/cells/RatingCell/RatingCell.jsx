import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useEmployees } from "../../EmployeesContext";
import PropTypes from "prop-types";

const RatingCell = ({ employeeId, rating = 0 }) => {
  const [ratingValue, setRatingValue] = useState(rating);
  const { ratingEmployeeById } = useEmployees();

  const handleRatingOnChange = (ev, newRating) => {
    ratingEmployeeById(employeeId, newRating);
    setRatingValue(newRating);
  };
  return (
    <Rating
      name="simple-controlled"
      value={ratingValue}
      onChange={handleRatingOnChange}
    />
  );
};

RatingCell.propTypes = {
  employeeId: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default RatingCell;
