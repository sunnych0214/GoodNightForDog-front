import React, { Component } from "react";
import { Route } from "react-router-dom";
import { About, Main, Adopt, AdoptDetail, AdoptReview, MissingDetail,
  Donation, MyPage, Login, SearchId, SearchPw } from "../pages";
import { Header } from "../components";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/searchId" component={SearchId}/>
        <Route path="/searchPw" component={SearchPw}/>
        <Route exact path="/adopt" component={Adopt} />
        <Route path="/adopt/:id" component={AdoptDetail} />
        <Route path="/missing/:id" component={ MissingDetail }/>
        <Route path="/adopt-review" component={AdoptReview} />
        <Route path="/donation" component={Donation} />
        <Route path="/my-page" component={MyPage} />
      </div>
    );
  }
}

export default App;