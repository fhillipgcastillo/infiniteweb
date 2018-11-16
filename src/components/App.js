import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from './navbar/navbar';
import MuiThemProvider from "material-ui/styles/MuiThemeProvider";
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import Videos from './videos/videos';

import "./App.css";

class App extends Component {
  state = {
    msg: ""
  };
  render() {
    return (
      <MuiThemProvider>
        <div className="App">
          <NavBar />
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
    synopsis
  }
}

`;

export default graphql(Queries)(App);
