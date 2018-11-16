import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

class VideoPreview extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <a href={"/movies/" + this.props.id} className="col-12 col-sm-4">
        <img className="card-img-top" src={this.props.covertImage} alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {this.props.title + " " +(new Date(parseInt(this.props.released))) + " "}
          </h5>
          <p className="card-text">{this.props.synopsis}</p>
          <p className="card-text">{this.props.rating}</p>
          {/* <a href={"/movies/" + this.props.id} className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </a>
    );
  }
}

export default withStyles(styles)(VideoPreview);
