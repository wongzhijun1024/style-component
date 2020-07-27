import React, { Component } from "react";
import { Logo } from "./styledCss";
class StyledPage extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="title">02-引入图片</h1>
        <Logo />
      </div>
    );
  }
}
export default StyledPage;
