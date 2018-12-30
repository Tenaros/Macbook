import React from "react";
import Button from "@material-ui/core/Button";

import ticket_icon from "../../resources/images/icons/ticket.png";

const myButton = props => {
  return (
    <Button
      href={props.link}
      target="_blank"
      variant="contained"
      size="small"
      style={{ background: props.bck, color: props.color }}
    >
      <img src={ticket_icon} className="iconImage" alt="icon" />
      {props.text}
    </Button>
  );
};

export default myButton;
