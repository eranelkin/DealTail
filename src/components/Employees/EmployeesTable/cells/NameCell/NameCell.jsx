import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { translations } from "../../../../../translations/translations";

const {
  employees: { cellName },
} = translations;

const NameCell = ({ employee }) => {
  const [showAvatar, setShowAvatar] = useState(false);

  const tooltipText = (
    <div>
      <div>
        {cellName.name} {employee.name}
      </div>
      <div>
        {cellName.username} {employee.username}
      </div>
    </div>
  );

  const handleMouse = (show) => (ev) => {
    if (showAvatar !== show) {
      setShowAvatar(show);
    }
  };
  return (
    <div onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
      <Tooltip title={tooltipText} placement="bottom-start">
        <Typography variant="body2" component="div">
          {employee.name}
        </Typography>
      </Tooltip>
      {showAvatar && (
        <Card
          sx={{
            maxWidth: 345,
            position: "absolute",
            margin: "-110px 20px",
            zIndex: 10,
          }}
        >
          <CardMedia
            component="img"
            height="80"
            image={employee.avatarSrc}
            alt={employee.name}
          />
        </Card>
      )}
    </div>
  );
};

NameCell.propTypes = {
  employee: PropTypes.shape({}).isRequired,
};

export default NameCell;
