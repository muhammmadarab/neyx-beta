import React from "react";
import "./Footer2.css";
import CopyrightOutlinedIcon from "@material-ui/icons/CopyrightOutlined";

function Footer() {
  return (
    <div className="footer2">
      <CopyrightOutlinedIcon />
      <p>
        Copyright 2021, <strong>Neyx</strong> |{" "}
        <a href="/">Terms &amp; Condition</a>
      </p>
    </div>
  );
};

export default Footer;
