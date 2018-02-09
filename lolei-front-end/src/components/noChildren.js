import React from "react";
import { Header, Icon } from "semantic-ui-react";

const NoChildren = () => {
  return (
    <Header
      style={{ marginTop: "12.5vh" }}
      color="orange"
      textAlign="center"
      as="h1"
      icon
    >
      <Icon name="child" />
      <Header style={{ fontFamily: "Schoolbell" }}>
        Open the menu and click 'Add A Child' to get started.
      </Header>
    </Header>
  );
};

export default NoChildren;
