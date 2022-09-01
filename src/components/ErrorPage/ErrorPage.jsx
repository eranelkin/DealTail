import React from "react";
import Link from "@mui/material/Link";

import "./errorpage.scss";

const ErrorPage = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Page not found</p>
      <Link href="/">Home page</Link>
    </section>
  );
};

export default ErrorPage;
