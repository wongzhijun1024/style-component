import React, { Component } from "react";
import { Rotate } from "./styledCss";

class Styled extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="title">06-动画 </h1>
        <Rotate>旋转动画</Rotate>
      </div>
    );
  }
}

export default Styled;
