import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Videos from "./components/videos/videos";
import videosData from "./videos.json";
import Navbar from "./components/navbar/navbar";
import Video from "./components/videos/video";


class RouterMap extends Component {
  state = {
    currentPageNumber: 1
  };
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              redirect="/p=1"
              // render={state => <Videos videos={videosData} currentPageNumber={state.currentPageNumber}/>}
              render={state => <Redirect to='/p=1' />}
            />
            <Route
              path="/p=:currentPageNumber"
              render={state => <Videos videos={videosData} currentPageNumber={state.match.params.currentPageNumber}/>}
            />
            <Route
              path="/movies/:movieId"
              render={ state => <Video {...state.match} />}
            />
            {/* <Route
              exact
              path="/movies"
              render={state => <Videos videos={videosData} />}
            /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
export default RouterMap;
