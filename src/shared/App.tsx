import React, { Component } from "react";
import { Route } from "react-router-dom";
import { About, Main, Adopt, AdoptDetail, AdoptReview, MissingDetail,
  Register, Donation, MyPage, Login, SearchId, SearchPw, MissingWritePage,
  MissingPage } from "../pages";
import { Header } from "../components";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div  style={{ maxWidth: '1000px', margin: 'auto' }}>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/searchId" component={SearchId}/>
          <Route path="/searchPw" component={SearchPw}/>
          <Route exact path="/adopt" component={Adopt} />
          <Route path="/adopt/:id" component={AdoptDetail} />
          <Route path="/missing" component={MissingPage} />
          <Route path="/missing-write" component={MissingWritePage} />
          <Route path="/missing/:id" component={ MissingDetail }/>
          <Route path="/adopt-review" component={AdoptReview} />
          <Route path="/donation" component={Donation} />
          <Route path="/my-page" component={MyPage} />
        </div>
      </div>
    );
  }
}

export default App;