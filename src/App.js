import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./styles/index.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((eachContainer, i) => {
            const Layout = eachContainer.layout;
            return (
              <Route
                key={i}
                exact={eachContainer.exact}
                path={eachContainer.path}
                render={route => (
                  <Layout
                    childComponent={eachContainer.component}
                    route={route}
                  />
                )}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
