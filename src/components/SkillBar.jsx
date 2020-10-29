import React from "react";
import { List, Icon } from "semantic-ui-react";
import styles from "./SkillBar.module.css";

export default function SkillBar({ title, stars }) {
  return (
    <List.Item className={styles.lista} style={{ padding: "1em" }}>
      <List.Content floated="right">
        <Icon
          name={stars >= 1 ? "star" : "star outline"}
          className={styles.item}
        />
        <Icon
          name={stars >= 2 ? "star" : "star outline"}
          className={styles.item}
        />
        <Icon
          name={stars >= 3 ? "star" : "star outline"}
          className={styles.item}
        />
        <Icon
          name={stars >= 4 ? "star" : "star outline"}
          className={styles.item}
        />
        <Icon
          name={stars >= 5 ? "star" : "star outline"}
          className={styles.item}
        />
      </List.Content>
      <List.Content>{title}</List.Content>
    </List.Item>
  );
}
