import React from "react";
import { SocialLink } from "../Contact.style";

function SocialLinks(props) {
  return (
    <SocialLink href={props.redirect}>
      <i className={props.icon}></i>
    </SocialLink>
  );
}

export default SocialLinks;
