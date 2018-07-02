import React from "react";
import ReactDOM from "react-dom";
import ban from "../public/img/skycrapers.png";

class Banner extends React.Component {
  render() {
    return (
      <div>
        <img src={ban} alt="" />
      </div>
    );
  }
}

export default Banner;
