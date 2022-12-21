import { Component } from "react";
import "./intro.css";

class IntroData extends Component {
  render() {
    return (
      <div className={this.props.classname}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default IntroData;
