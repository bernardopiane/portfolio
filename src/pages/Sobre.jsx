import React from "react";
import { Container } from "semantic-ui-react";
import History from "../components/History";
import Info from "../components/ProfileCard";
import Languages from "../components/Languages";
import Skills from "../components/Skills";

export default function Sobre() {
  return (
    <Container style={{marginBottom: '5em'}}>
      <Info />
      <History />
      <Skills />
      <Languages />
    </Container>
  );
}
