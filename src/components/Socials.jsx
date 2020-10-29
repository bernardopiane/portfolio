import React from "react";
import { Grid, Popup } from "semantic-ui-react";
import SocialItem from "./SocialItem";

export default function Socials() {
  const linkStyle = {
    color: "black",
    display: "flex",
    justifyContent: "center",
  };

  const alignment = { display: "flex", justifyContent: "center" };

  return (
    <Grid stackable columns={3}>
      <Grid.Column>
        <div style={alignment}>
          <Popup
            position="top center"
            content="Me mande uma mensagem"
            trigger={
              <a
                href="https://wa.me/55022992140353"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <SocialItem icon="whatsapp">(22) 99214-0353</SocialItem>
              </a>
            }
          />
        </div>
      </Grid.Column>
      <Grid.Column>
        <div style={alignment}>
          <Popup
            position="bottom center"
            content="Me mande uma DM"
            trigger={
              <a
                href="https://twitter.com/pianeviski"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <SocialItem icon="twitter">@Pianeviski</SocialItem>
              </a>
            }
          />
        </div>
      </Grid.Column>
      <Grid.Column>
        <div style={alignment}>
          <Popup
            position="top center"
            content="Me mande um email"
            trigger={
              <a href="mailto:bernardopiane@gmail.com" style={linkStyle}>
                <SocialItem icon="mail">bernardopiane@gmail.com</SocialItem>
              </a>
            }
          />
        </div>
      </Grid.Column>
    </Grid>
    // <div style={{ display: "flex", justifyContent: "space-around" }}>
    //   <SocialItem icon="whatsapp">(22) 99214-0353</SocialItem>
    //   <SocialItem icon="twitter">@Pianeviski</SocialItem>
    //   <SocialItem icon="mail">bernardopiane@gmail.com</SocialItem>
    // </div>
  );
}
