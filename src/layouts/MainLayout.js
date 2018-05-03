import React, { Component } from "react";
import TopNavBar from "./TopNavBar";

class MainLayout extends Component {
  render() {
    const ChildComponent = this.props.childComponent;
    const route = this.props.route;
    return (
      <div>
        <TopNavBar />
        <div className="container-fluid">
          Main Layout
          <ChildComponent route={route} />
        </div>
      </div>
    );
  }
}

export default MainLayout;
