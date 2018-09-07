import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import PostsAll from "./PostsAll";
import PostsOne from "./PostsOne";
import PostsNew from "./PostsNew";
import UsersNew from "./UsersNew";
import Login from "./Login";
import Logout from "./Logout";

import ProtectedRoute from "./ProtectedRoute";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}  />

            <Route exact path="/posts" component={PostsAll}  />
            <ProtectedRoute path="/posts/new" component={PostsNew}  />
            <Route path="/posts/:id([0-9a-fA-F]{24})" component={PostsOne}  />
            <Route path="/posts/:category(\D+)" component={PostsAll}  />

            <Route exact path="/users/new" component={UsersNew}  />
            <Route exact path="/users/login" component={Login}  />
            <Route exact path="/users/logout" component={Logout}  />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
