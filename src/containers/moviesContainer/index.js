import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Videos from "../../components/videos/videos";
// import VideosCarousel from "./videos/VideosCarousel";

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
      fullImage
      synopsis
      mediaContent
      trailer
    }
    topMovies:  allMovies(
      orderBy: { released: -1 }
      filter: { released: { from: "2017", to: "2019" } }
      limit: 10
      skip: 0
    ) {
      id
      title
      year
      released
      actors
      rating
      covertImage
      fullImage
      synopsis
      mediaContent
      trailer
    }
    recentlyUpdated: allMovies(
      orderBy: { dateUpdated: -1 }
      filter: { dateUpdated: { from: "2018", to: "2020" } }
      limit: 10
      skip: 0
    ) {
      id
      title
      year
      released
      actors
      rating
      covertImage
      fullImage
      synopsis
      mediaContent
      trailer
    }
  }
`;

class MoviesContainer extends Component {
  state = {
    msg: ""
  };
  render() {
    return (  
        <div className="App">
          {this.props.data.loading ? (
            <div>Loading...</div>
          ) : (
            <React.Fragment>
              {this.props.data && this.props.data.topMovies.length > 0 
              ?
              <div className="mainBillboard" style={{backgroundColod:"black"}}>
                <h1>Banner </h1>
                <img className="container" alt="" src={this.props.data.topMovies[0].fullImage} />
              </div>
              : null}
              <Videos
                videos={this.props.data.recentlyUpdated}
                title="Recently Updated Videos"
              />
              <Videos
                videos={this.props.data.topMovies}
                title="Top Last Years Videos"
              />
              <Videos
                videos={this.props.data.lastMovies}
                title="Top Last Years Videos"
              />
              {/* <VideosCarousel /> */}
            </React.Fragment>
          )}
        </div>
    );
  }
}

export default graphql(Queries, {$limit: 10, $skip:0})(MoviesContainer);
