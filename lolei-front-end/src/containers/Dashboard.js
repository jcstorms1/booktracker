import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Menu, Icon, Segment, Sidebar, Image } from "semantic-ui-react";
import IsbnSearch from "../components/isbnSearch";
import BookList from "../components/bookList";
import NoBook from "../components/noBook";
import HomeList from "../components/homeList";
import AddChildModal from "../components/addChildModal";
import withAuth from "../hocs/withAuth";
import getByISBN from "../actions/aws";
import { onChildClick, onDeleteBook, setFilter } from "../actions/onChange";
import { createUser } from "../actions/";
import { setFavorite } from "../actions/onChange";
import logo from "../../src/lolei2.svg";
import "../styling/menu.css";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header";

class Dashboard extends Component {
  state = {
    search: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    modal: false,
    menuVisible: false,
    activeMenuItem: "home"
  };

  onClick = e => {
    this.setState({ search: "" });
    if (this.props.selectedChild === "home") {
      this.props.getByISBN(this.state.search, this.props.userId);
    } else {
      this.props.getByISBN(
        this.state.search,
        this.props.children[this.props.selectedChild]["id"]
      );
    }
  };

  onPickChild = (e, { name }) => {
    const parsedName = isNaN(parseInt(name, 10)) ? "home" : parseInt(name, 10);
    this.props.onChildClick(parsedName);
    this.props.setFilter("All");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addChild = () => {
    this.setState({ modal: true });
  };

  addChildSubmit = () => {
    // DON'T FORGET TO PASS BACK ACCOUNT TYPE
    this.closeModal();
    this.props.createUser(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        accountType: "Child",
        parentId: this.props.userId
      },
      this.props.history
    );
    this.toggleMenuVisible();
  };

  onFavorite = (e, { name, rating }) => {
    this.props.setFavorite(name, !!rating);
  };

  closeModal = () => {
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      modal: false
    });
  };

  toggleMenuVisible = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  handleActive = (e, { name }) => {
    if (name === "home") {
      this.onPickChild(null, { name });
    }
    this.setState({ activeMenuItem: name });
    this.toggleMenuVisible();
  };

  onRemoveBook = (e, { name }) => {
    this.props.onDeleteBook(name);
  };

  render() {
    const children = this.props.children.map((child, index) => {
      return (
        <Menu.Menu key={index}>
          <Menu.Item
            as="p"
            className="kid-submenu"
            name={index.toString()}
            onClick={this.onPickChild}
          >
            {child.first_name}
          </Menu.Item>
        </Menu.Menu>
      );
    });
    return (
      <div>
        <AddChildModal
          onChange={this.onChange}
          modal={this.state.modal}
          closeModal={this.closeModal}
          addChildSubmit={this.addChildSubmit}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          username={this.state.username}
          password={this.state.password}
        />
        <Menu id="menu-bar" fixed="top">
          <Menu.Item id="menu-logo" as="h3" header>
            <Image src={logo} />
          </Menu.Item>
          {this.props.accountType === "Parent" ? (
            <Menu.Item id="menu-menu" onClick={this.toggleMenuVisible}>
              <Icon name="sidebar" />Menu
            </Menu.Item>
          ) : null}
          <Menu.Item
            style={{
              width: "100%",
              textAlign: "center",
              position: "absolute",
              pointerEvents: "none"
            }}
          >
            <Header
              as="h1"
              style={{ margin: "auto", fontFamily: "Schoolbell" }}
            >
              Welcome, {this.props.firstName}!
            </Header>
          </Menu.Item>
          <Menu.Item id="right-menu" position="right">
            <Button id="logout-btn" onClick={this.props.onLogout}>
              Log Out
            </Button>
          </Menu.Item>
        </Menu>
        {this.props.accountType === "Parent" ? (
          <Sidebar.Pushable
            style={{
              height: window.innerHeight,
              backgroundColor: "#add8e6",
              overflow: "hidden"
            }}
            as={Segment}
            attached="bottom"
          >
            <Sidebar
              id="menu-sidebar"
              width="thin"
              as={Menu}
              animation="uncover"
              visible={this.state.menuVisible}
              icon="labeled"
              vertical
              inline="true"
              inverted
            >
              <Menu.Item
                id="menu-home"
                name="home"
                active={this.state.activeMenuItem === "home"}
                onClick={this.handleActive}
              >
                <Icon name="home" />Home
              </Menu.Item>
              <Menu.Item
                id="menu-kids"
                name="kids"
                active={this.state.activeMenuItem === "kids"}
                onClick={this.handleActive}
              >
                <Icon name="child" />
                <Menu.Header>Kids</Menu.Header>
                {children}
              </Menu.Item>
              <Menu.Item id="menu-add-child" onClick={this.addChild}>
                <Icon name="user plus" />Add A Child
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher
              dimmed={this.state.menuVisible}
              style={{ backgroundColor: "#add8e6" }}
            >
              <div className="center-div">
                <div style={{ marginTop: "50px" }}>
                  {this.props.selectedChild === "home" ? (
                    <HomeList
                      activeMenuItem={this.state.activeMenuItem}
                      onFavorite={this.onFavorite}
                      children={this.props.children}
                    />
                  ) : this.props.children[this.props.selectedChild].books
                    .length !== 0 ? (
                    <div>
                      <IsbnSearch
                        onClick={this.onClick}
                        onChange={this.onChange}
                        search={this.state.search}
                      />
                      <BookList
                        activeMenuItem={this.state.activeMenuItem}
                        onFavorite={this.onFavorite}
                        onRemoveBook={this.onRemoveBook}
                        child={this.props.children[this.props.selectedChild]}
                        accountType={this.props.accountType}
                      />
                    </div>
                  ) : (
                    <div>
                      <IsbnSearch
                        onClick={this.onClick}
                        onChange={this.onChange}
                        search={this.state.search}
                      />
                      <NoBook
                        child={this.props.children[this.props.selectedChild]}
                      />
                    </div>
                  )}
                </div>
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        ) : (
          <div className="center-div">
            <IsbnSearch
              onClick={this.onClick}
              onChange={this.onChange}
              search={this.state.search}
            />
            <BookList
              books={this.props.userBooks}
              onFavorite={this.onFavorite}
              accountType={this.props.accountType}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id,
  firstName: state.auth.currentUser.firstName,
  lastName: state.auth.currentUser.lastName,
  accountType: state.auth.currentUser.accountType,
  userBooks: state.auth.currentUser.books || [],
  children: state.auth.currentUser.children || [],
  selectedChild: state.change.selectedChild,
  addChildAccount: state.change.addChildAccount
});

export default withRouter(
  withAuth(
    connect(mapStateToProps, {
      getByISBN,
      onChildClick,
      createUser,
      onDeleteBook,
      setFavorite,
      setFilter
    })(Dashboard)
  )
);
