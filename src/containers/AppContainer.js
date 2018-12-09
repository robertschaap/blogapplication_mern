import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LayoutContainer from "./LayoutContainer";
import HomeContainer from "./HomeContainer";
import PostsAllContainer from "./PostsAllContainer";
import PostsOneContainer from "./PostsOneContainer";
import PostsNewContainer from "./PostsNewContainer";
import UsersNew from "./UsersNew";
import LoginContainer from "./LoginContainer";
import LogoutContainer from "./LogoutContainer";

import ProtectedRouteContainer from "./ProtectedRouteContainer";

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <LayoutContainer>
          <Switch>
            <Route exact path="/" component={HomeContainer} />

            <Route exact path="/posts" component={PostsAllContainer} />
            <ProtectedRouteContainer path="/posts/new" component={PostsNewContainer} />
            <Route path="/posts/:id([0-9a-fA-F]{24})" component={PostsOneContainer} />
            <Route path="/posts/:category(\D+)" component={PostsAllContainer} />

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
