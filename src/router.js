import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Videos from "./components/videos/videos";
// import videosData from "./videos.json";
import Navbar from "./components/navbar/navbar";
// import Video from "./components/videos/video";
import App from "./components/App";
import MoviesContainer from "./containers/moviesContainer";
import SeriesContainer from "./containers/seriesContainer";
import VideosCarousel, {BootstrapCarousel} from "./components/videos/VideosCarousel";


class RouterMap extends Component {
  state = {
    currentPageNumber: 1,
    currentUser: {}
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container-fluid">
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={state => <MoviesContainer martch={state.match} />}
                />
                <Route
                  exact
                  path="/movies"
                  render={state => <MoviesContainer martch={state.match} />}
                />
                <Route
                  exact
                  path="/series"
                  render={state => <SeriesContainer martch={state.match} />}
                />
                <Route
                  exact
                  path="/carousel"
                  render={state => <BootstrapCarousel martch={state.match} />}
                />
                {/* <Route
              path="/p=:currentPageNumber"
              render={state => <Videos videos={videosData} currentPageNumber={state.match.params.currentPageNumber}/>}
            />
            <Route
              path="/movies/:movieId"
              render={ state => <Video {...state.match} />}
            /> */}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default RouterMap;
