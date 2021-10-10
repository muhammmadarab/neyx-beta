import React from "react";
import { Link } from "react-router-dom";
import "./Footer2.css";
import CopyrightOutlinedIcon from "@material-ui/icons/CopyrightOutlined";

function Footer() {
  return (
    <div className="footer2">
      <CopyrightOutlinedIcon />
      <p>
        Copyright 2021, <strong>Neyx</strong> |{" "}
        <Link to="/tNc" target="_blank">
          Terms &amp; Condition
        </Link>
      </p>
    </div>
  );
}

export default Footer;
