import React from "react";
import "./nav.scss";
import { data } from "../../data";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

function Nav() {
  const contact = data.contact;
  return (
    <div className="nav" id="nav">
      <div className="left">
        <div className="brand">
          <a href="">theWebGuy.</a>
        </div>
        <div className="contact-info">
          {contact.phone && (
            <div className="info">
              <PersonAddIcon className="icon" />
              <span>{contact.phone}</span>
            </div>
          )}
          {contact.email && (
            <div className="info">
              <MailIcon className="icon" />
              <span>{contact.email}</span>
            </div>
          )}
        </div>
      </div>

      <div className="right">
        <MenuIcon className="hamburger" />
      </div>
    </div>
  );
}

export default Nav;
