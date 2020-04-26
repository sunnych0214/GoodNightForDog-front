import React, { Component } from "react";
import { Route } from "react-router-dom";
import { About, Main, Register } from "../pages";
import { Header } from "../components";

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;