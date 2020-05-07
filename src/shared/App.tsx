import React, { Component } from "react";
import { Route } from "react-router-dom";
import { About, Main, Login, MissingDetail } from "../pages";
import { Header } from "../components";

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/missing/:id" component={ MissingDetail }/>
      </div>
    );
  }
}

export default App;