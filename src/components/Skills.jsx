import React from "react";
import { List, Grid } from "semantic-ui-react";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <>
      <h2 className="ui center aligned header block">Habilidades</h2>
      <Grid divided stackable columns={2}>
        <Grid.Column width={8}>
          <List relaxed divided verticalAlign="middle">
            <SkillBar stars={5} title="HTML" />
            <SkillBar stars={5} title="CSS" />
            <SkillBar stars={4} title="Javascript" />
            <SkillBar stars={4} title="Jquery" />
            <SkillBar stars={4} title="Wordpress" />
            <SkillBar stars={4} title="Flutter" />
          </List>
        </Grid.Column>
        <Grid.Column width={8}>
          <List relaxed divided verticalAlign="middle">
            <SkillBar stars={4} title="React" />
            <SkillBar stars={4} title="Vue" />
            <SkillBar stars={3} title="Angular" />
            <SkillBar stars={3} title="SQL" />
            <SkillBar stars={3} title="SEO" />
            <SkillBar stars={2} title="PHP" />
          </List>
        </Grid.Column>
      </Grid>
    </>
  );
}
