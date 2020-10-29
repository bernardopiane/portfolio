import React from "react";
import { NavLink } from "react-router-dom";

const spacing = {
  marginTop: "2em",
  marginLeft: "1em",
  marginRight: "1em",
};

const active = {
  color: "black",
};

export default function MyLink(props) {
  return (
    <NavLink exact to={props.to} style={spacing} activeStyle={active}>
      {props.title}
    </NavLink>
  );
}
