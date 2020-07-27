import React, { Component } from "react";
import { Title } from "./styledCss";
class StyledPage extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="title">01-基础语法</h1>
        <Title>
          基本语法<span>子元素</span>
        </Title>
      </div>
    );
  }
}
export default StyledPage;
