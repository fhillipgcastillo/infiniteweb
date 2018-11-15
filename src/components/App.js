import React, { Component } from "react";
import logo from "./logo.svg";
import AppBar from "material-ui/AppBar";
import MuiThemProvider from "material-ui/styles/MuiThemeProvider";
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import Videos from './videos/videos';

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
  render() {
    return (
      <MuiThemProvider>
        <div className="App">
          <AppBar
            title={this.state.msg || "nothing"}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Header />
          {this.props.data.loading 
          ? <div>Loading...</div>
          : <Videos videos={this.props.data.allMovies} />
          }
        </div>
      </MuiThemProvider>
    );
  }
}

const Queries = gql`
{
  allMovies {
    id
    title
    year
    released
    actors
    rating
    covertImage
  }
}

`;

export default graphql(Queries)(App);
