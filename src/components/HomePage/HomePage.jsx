import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { translations } from "../../translations/translations";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="page">
      <Typography variant="h5" component="div">
        {translations.homepage.title}
      </Typography>
      <Typography variant="body1" component="div">
        {translations.homepage.continue}
        <Link href="/employees">{translations.homepage.employees}</Link>
      </Typography>
    </div>
  );
};

export default HomePage;
