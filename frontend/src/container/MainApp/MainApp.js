import React, { Component } from "react";
import Header from "../../component/header/Header.js";
import Home from "../Home/Home.js";
import Buildown from "../BuildOwn/BuildOwn.js";
import Order from "../Order/Order.js";
import Prebuilt from "../Prebuilt/Prebuilt.js";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./MainApp.css";

class MainApp extends Component {
  mainFunc() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route
              exact
              path="/home"
              render={() => {
                return (
                  <div>
                    <Home />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/prebuilt"
              render={() => {
                return (
                  <div>
                    <Prebuilt />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/buildyourown"
              render={() => {
                return (
                  <div>
                    <Buildown />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/order"
              render={() => {
                return (
                  <div>
                    {" "}
                    <Order />{" "}
                  </div>
                );
              }}
            />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </div>
        </Router>
      </div>
    );
  }
  render() {
    return <div>{this.mainFunc()}</div>;
  }
}

export default MainApp;
