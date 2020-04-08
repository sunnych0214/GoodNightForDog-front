import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, About } from "../pages";
import { Header } from "../components";

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;