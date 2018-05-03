import React, { Component } from "react";

class EmptyLayout extends Component {
  render() {
    const ChildComponent = this.props.childComponent;
    const route = this.props.route;
    return (
      <div className="container-fluid">
      Empty Layout
        <ChildComponent route={route} />
      </div>
    );
  }
}

export default EmptyLayout;
