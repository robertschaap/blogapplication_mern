import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LayoutContainer from "./LayoutContainer";
import HomeContainer from "./HomeContainer";
import PostsAll from "./PostsAll";
import PostsOne from "./PostsOne";
import PostsNew from "./PostsNew";
import UsersNew from "./UsersNew";
import LoginContainer from "./LoginContainer";
import LogoutContainer from "./LogoutContainer";

import ProtectedRoute from "./ProtectedRoute";

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <LayoutContainer>
          <Switch>
            <Route exact path="/" component={HomeContainer} />

            <Route exact path="/posts" component={PostsAll} />
            <ProtectedRoute path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id([0-9a-fA-F]{24})" component={PostsOne} />
            <Route path="/posts/:category(\D+)" component={PostsAll} />

            <Route exact path="/users/new" component={UsersNew} />
            <Route exact path="/users/login" component={LoginContainer} />
            <Route exact path="/users/logout" component={LogoutContainer} />
          </Switch>
        </LayoutContainer>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
