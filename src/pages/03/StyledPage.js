import React, { Component } from "react";
import { Search } from "./styledCss";
class Styled extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="title">03-添加属性</h1>
        <Search />
        <Search className="flag" />
      </div>
    );
  }
}
export default Styled;
