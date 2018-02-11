import React from "react";
import { Header, Icon } from "semantic-ui-react";

const NoBook = props => {
  return (
    <div id="nobooks">
      <Header color="grey" textAlign="center" as="h2" icon>
        <Icon name="book" />
        Oh no!
      </Header>
      <Header
        as="h3"
        textAlign="center"
        style={{ fontFamily: "Schoolbell", paddingTop: "1vh" }}
      >
        {props.child.first_name} has not added any books yet!
      </Header>
      <Header as="h3" textAlign="center" style={{ fontFamily: "Schoolbell" }}>
        Add some books by entering an ISBN in the search bar on the child's
        page.
      </Header>
    </div>
  );
};

export default NoBook;
