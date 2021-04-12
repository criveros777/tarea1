import React from "react";
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import MembersPage from "./pages/members/members.component";

import Header from "./components/header/header.component"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  render() {
    return (
      <div>
       <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/members" component={MembersPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
