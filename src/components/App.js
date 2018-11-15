import React, { Component } from "react";
import logo from "./logo.svg";
import AppBar from "material-ui/AppBar";
import MuiThemProvider from "material-ui/styles/MuiThemeProvider";

import "./App.css";

const Header = props => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);

class App extends Component {
  state = {
    msg: ""
  };
  componentDidMount() {
    var api = "http://localhost:8080";
    // fetch(`${api}/api`)
    //   .then(res => {
    //     console.log(res);
    //     return res.json()
    //   })
    //   .then(data => {
    //     this.setState({ msg: data.msg });
    //   });
  }
  render() {
    return (
      <MuiThemProvider>
        <div className="App">
          <AppBar
            title={this.state.msg || "nothing"}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Header />
        </div>
      </MuiThemProvider>
    );
  }
}

export default App;
