import React from "react";
import { Container } from "semantic-ui-react";
import MyLink from "./MyLink";

const title = {
  display: "flex",
  justifyContent: "center",
  fontFamily: "Sacramento, cursive",
  fontSize: "xxx-large",
  paddingTop: "2em",
};

const links = {
  display: "flex",
  justifyContent: "center",
};

const padding = {
  paddingBottom: "5em",
};

export default function TopBar() {
  return (
    <Container style={padding}>
      <div style={title}>Bernardo Piane</div>
      {renderLinks()}
    </Container>
  );

  function renderLinks() {
    return (
      <div style={links}>
        <MyLink title="Portfolio" to="/" />
        <MyLink title="Sobre" to="/sobre" />
        <MyLink title="Contato" to="/contato" />
      </div>
    );
  }
}
