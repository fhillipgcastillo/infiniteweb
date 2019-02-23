import React, { Component } from "react";
import "./VideoCarousel.css";


const VideosCarousel = () => {
  return (
    <div
      id="multi-item-example"
      className="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      <div className="controls-top">
        <a
          className="btn-floating"
          href="#multi-item-example"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left" />
        </a>
        <a
          className="btn-floating"
          href="#multi-item-example"
          data-slide="next"
        >
          <i className="fa fa-chevron-right" />
        </a>
      </div>
      <ol className="carousel-indicators">
        <li
          data-target="#multi-item-example"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#multi-item-example" data-slide-to="1" />
        <li data-target="#multi-item-example" data-slide-to="2" />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div
          className="carousel-item active"
          style={{ display: "inline-flex" }}
        >
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{ display: "inline-flex" }}>
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{ display: "inline-flex" }}>
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftIcon = () => {
  return (
    <React.Fragment>
      <span className="arrow-left" />
      <span style={{ position: "absolute", left: 0 }}>&#62;</span>
    </React.Fragment>
  );
};

const Indicators = state => (
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to="0"
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to="1" />
    <li data-target="#carouselExampleIndicators" data-slide-to="2" />
  </ol>
);

const CarouselControls = state => (
  <React.Fragment>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </React.Fragment>
);


class BootstrapCarousel extends Component {
  state = {};
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <Indicators />
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg" alt="Third slide" />
          </div>
        </div>
       <CarouselControls />
      </div>
    );
  }
}

export { BootstrapCarousel };
export default VideosCarousel;
