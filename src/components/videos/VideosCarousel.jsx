import React, { Component } from "react";

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
        <div className="carousel-item active">
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
        <div className="carousel-item">
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
        <div className="carousel-item">
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

export default VideosCarousel;
