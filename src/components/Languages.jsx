import React from "react";
import { Grid, List } from "semantic-ui-react";
import SkillBar from "./SkillBar";

export default function Languages() {
  return (
    <>
      <h2 className="ui center aligned header block" style={{marginTop: '5em'}}>Línguas</h2>
      <Grid divided stackable columns={2}>
        <Grid.Column width={8}>
          <List relaxed divided verticalAlign="middle">
            <SkillBar stars={5} title="Inglês" />
            <SkillBar stars={5} title="Português" />
          </List>
        </Grid.Column>
        <Grid.Column width={8}>
          <List relaxed divided verticalAlign="middle">
            <SkillBar stars={1} title="Espanhol" />
            <SkillBar stars={1} title="Japonês" />
          </List>
        </Grid.Column>
      </Grid>
    </>
  );
}
