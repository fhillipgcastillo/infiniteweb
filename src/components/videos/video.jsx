import React, { Component } from "react";
import videosData from "../../videos.json";
import axios from "axios";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {      }
    };
  }
  componentDidMount() {
    this.getMovieFromServer();
  }
  getMovieFromServer = () => {
    var movieId = this.props.params.movieId;
    var self = this;
    fetch("http://varnatrd.tech/api/movies/" + movieId)
      .then(res => {
        return res.json();
      })
      .then(data => {
        self.setState({ movie: data });
      });
  };
  setLocalMovie = () => {
    var movieId = this.props.params.movieId;
    var movie = videosData.find(m => m._id === movieId);
    this.setState({ movie: movie });
  };
  render() {
    if(!this.state.movie._id) return (<h3>No Video loaded</h3>)
    return (
      this.state.movie.content.map((content) => {
        return (
          <div key={content._id} className="col-12 embed-responsive embed-responsive-16by9">
            <video src={content.link} controls className="embed-responsive-item" />
            <span>{this.state.movie.title + " " + content.quality}</span>
          </div>
        );
      })
    )
  }
}

export default Video;
