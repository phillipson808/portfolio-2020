import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
       navOpen: !this.state.navOpen
    })
    console.log(this.state.navOpen)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Nav toggleNav={this.toggleNav} navOpen={this.state.navOpen} />
      </div>
    );
  }
}
