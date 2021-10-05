import React from "react";
import { ContactLink } from "../Contact.style";

function ContactLinks(props) {
  return (
    <ContactLink>
      <span>
        <i className={props.icon}></i>
      </span>
      <span>{props.content}</span>
    </ContactLink>
  );
}

export default ContactLinks;
