import React, { Component } from "react";

class VideoPreview extends Component {
  state = {};
  render() {
    return (
      <a href={"/movies/" + this.props._id} className="col-12 col-sm-4">
        <img
          className="card-img-top"
          src={this.props.covertImage}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title} {this.props.year} </h5>
          <p className="card-text">{this.props.actors }</p>
          <p className="card-text">{this.props.rating}</p>
          {/* <a href={"/movies/" + this.props._id} className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </a>
    );
  }
}

export default VideoPreview;
