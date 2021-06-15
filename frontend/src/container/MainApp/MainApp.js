import React, { Component } from "react";
import Header from "../../component/header/Header.js";
import HomeSlide from "../slides/HomeSlide/HomeSlide.js";
import HomeOption from "../../component/HomeOption/HomeOption.js";

class MainApp extends Component {
  mainFunc() {
    return (
      <div style={{ backgroundColor: "#35333b" }}>
        <Header />
        <HomeSlide />
        <HomeOption />
      </div>
    );
  }
  render() {
    return <div>{this.mainFunc()}</div>;
  }
}

export default MainApp;
