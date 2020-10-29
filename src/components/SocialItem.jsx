import React from "react";
import { Icon } from "semantic-ui-react";

export default function SocialItem(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Icon size="big" name={props.icon} />
      {props.children}
    </div>
  );
}
