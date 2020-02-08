import React, { Component } from "react";
import { Link } from "react-router-dom";

export default props => {
  console.log(props.data ? props.data.genres : "no genres");
  if (
    (props.data === undefined || props.data === null) &&
    (props.data.genres === undefined || props.data.genres === null)
  ) {
    return <div></div>;
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Infinite
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <select>
          {props.data.genres.map((g, i) => (
            <option key={i}>{g.name}</option>
          ))}
        </select>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Genres
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {props.data.genres.map((g, i) => (
                  <a key={i} className="dropdown-item" href="#">
                    {g.name}
                  </a>
                ))}
              </div>
            </li>
            <li className="nav-item active">
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/series" className="nav-link">
                Series
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/carousel" className="nav-link">
                Carousel
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userMenu"
              role="button"
              data-toggle="dropdown"
            >
              Users
            </a>
            <div className="dropdown-menu" aria-labelledby="userMenu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};
