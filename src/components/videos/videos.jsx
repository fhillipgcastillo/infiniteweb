import React, { Component } from "react";
// import axios from "axios";
import VideoPreview from "./videoPreview";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountOfPages: 0,
      currentPageNumber: 0
    };
  }
  componentDidMount() {
    this.setState({
      amountOfPages: this.props.amountOfPages,
      currentPageNumber: this.props.currentPageNumber
    });
  }
  previousHandler = () => {
    this.props.onPrevious(this.state.currentPageNumber--);
  };
  nextHandler = () => {
    this.props.onNext(this.state.currentPageNumber++);
  };

  render() {
    return (
      <nav aria-label="Page navigation ">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <span className="page-link" onClick={this.previousHandler}>
              Previous
            </span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <span className="page-link" onClick={this.nextHandler}>
              Next
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

class Videos extends Component {
  state = {
    videos: [],
    currentPageNumber: 1,
    pageSize: 12,
    videosToShow: [],
    filterBy: () => {},
    sortBy: () => {}
  };
  componentDidMount() {
    this.setState({
      videos: this.props.videos || [],
      currentPageNumber: this.props.currentPageNumber
    });
    this.setState({ sortBy: (va, vb) => vb.year - va.year });
  }
  getPaginateVideos = videos => {
    return videos.slice(
      (this.state.currentPageNumber - 1) * this.state.pageSize,
      this.state.currentPageNumber * this.state.pageSize
    );
  };
  getByPages = papge => {
    return this.getPaginateVideos(this.state.videos.sort(this.state.sortBy));
  };
  changePage = page => {
    this.setState({ currentPageNumber: page });
  };
  filterByCategory = category => {
    var videos = this.state.videos.filter(video => {
      return video.categories.indexOf(category) > 0;
    });
    return videos;
  };
  getPagesAmount = () => {};
  previousHandler = page => {
    this.changePage(page);
  };
  nextHandler = page => {
    this.changePage(page);
  };
  render() {
    console.log(this.state);
    let videos = this.state.videos;//this.getByPages();
    return (
      <div className="row">
        <div className="col-12">
          <h3>{this.props.title}</h3>
        </div>
        {videos.map(video => {
          return <VideoPreview key={video.id} {...video} />;
        })}
        {/* <div className="col-12">
          <Pagination
            onPrevious={this.previousHandler}
            onNext={this.nextHandler}
            amountOfPages={this.getPagesAmount}
            currentPageNumber={this.state.currentPageNumber}
          />
        </div> */}
      </div>
    );
  }
}

export default Videos;
