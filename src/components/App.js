import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./navbar/navbar";
import MuiThemProvider from "material-ui/styles/MuiThemeProvider";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Videos from "./videos/videos";
import VideosCarousel from "./videos/VideosCarousel";

import "./App.css";

const Queries = gql`
  {
    lastMovies: getLastMovies {
      id
      title
      year
      released
      actors
      rating
      covertImage
      synopsis
      mediaContent
    }
    topMovies: allMovies(
      orderBy: { released: -1 }
      filter: { released: { from: "2017", to: "2019" } }
      pageSize: 10
      page: 1
    ) {
      id
      title
      year
      released
      actors
      rating
      covertImage
      synopsis
      mediaContent
    }
    recentlyUpdated: allMovies(
      orderBy: { dateUpdated: -1 }
      filter: { dateUpdated: { from: "2018", to: "2019" } }
      pageSize: 10
      page: 1
    ) {
      id
      title
      year
      released
      actors
      rating
      covertImage
      synopsis
      mediaContent
    }
  }
`;

class App extends Component {
  state = {
    msg: ""
  };
  render() {
    return (
      <MuiThemProvider>
        <div className="App">
          <NavBar />
          {this.props.data.loading ? (
            <div>Loading...</div>
          ) : (
            <React.Fragment>
              <div className="mainBillboard">
                <h1>Banner</h1>
              </div>
              <Videos
                videos={this.props.data.recentlyUpdated}
                title="Recently Updated Videos"
              />
              <Videos
                videos={this.props.data.topMovies}
                title="Top Last Years Videos"
              />
              {/* <VideosCarousel /> */}
            </React.Fragment>
          )}
        </div>
      </MuiThemProvider>
    );
  }
}

export default graphql(Queries)(App);
