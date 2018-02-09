import React, { Component } from "react";
import {
  Button,
  Menu,
  Dropdown,
  Sidebar,
  Icon,
  Segment
} from "semantic-ui-react";
import Sidebar2 from "../components/sidebar2";

class Nav extends Component {
  state = {
    visible: false
  };

  handlePush = () => {};
  handleToggle = () => {
    this.setState({
      visible: !this.state.visble
    });
  };

  render() {
    return (
      <div>
        <Sidebar2 visible={this.state.visible} />
        <Menu fixed="top">
          <Menu.Item id="my-menu-header" as="h3" header>
            LoLei
          </Menu.Item>
          <Menu.Item onClick={this.handleToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button color="grey" onClick={this.props.onLogout}>
              Log Out
            </Button>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Nav;
