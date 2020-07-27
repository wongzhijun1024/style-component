import React, { Component } from "react";
import "./App.css";
import { GlobalStyle } from "./style";
import View from "./pages/01/StyledPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <View />
      </div>
    );
  }
}
export default App;
