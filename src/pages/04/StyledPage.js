import React, { Component } from "react";
import { AddBtn, SubBtn } from "./styledCss";

class Styled extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="title">04-继承及传值</h1>
        <AddBtn>add按钮</AddBtn>
        <SubBtn primary>sub按钮</SubBtn>
        <SubBtn as="a" href="/">
          sub按钮
        </SubBtn>
      </div>
    );
  }
}
export default Styled;
