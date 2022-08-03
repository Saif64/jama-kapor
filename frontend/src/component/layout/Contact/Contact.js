import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="saifmahmud81@gmail.com">
        <Button>Contact: saifmahmud81@gmail</Button>
      </a>
    </div>
  );
};

export default Contact;
