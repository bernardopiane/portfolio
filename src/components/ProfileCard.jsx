import React from "react";
import { Image, Grid, Card } from "semantic-ui-react";
import profile from "../assets/pic3.jpg";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function Info() {
  return (
    <div style={style}>
      <Image
        src={profile}
        className="card raised"
        size="small"
        style={{
          borderRadius: "1em",
          position: "relative",
          zIndex: "1",
          top: "3em",
        }}
      />
      <Grid style={{ justifyContent: "center" }}>
        <Grid.Column computer={12} width={16}>
          <Card raised style={{ width: "100%", padding: "3em" }}>
            Desenvolvedor com experiência em Sistemas Web. Graduado em Análise e
            Desenvolvimento de Sistemas. Habilidades incluem gerenciamento de
            redes de computadores, pensamento analítico e resolução criativa de
            problemas. Capaz de aplicar conceitos de atendimento ao cliente à TI
            para melhorar a experiência do usuário.
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}
