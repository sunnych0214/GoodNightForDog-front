import React, { Component } from "react";
import { Route } from "react-router-dom";
import { About, Main, Login, Adopt } from "../pages";
import { Header } from "../components";

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/adopt" component={Adopt} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;