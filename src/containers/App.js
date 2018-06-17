import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import PostsAll from "./PostsAll";
import PostsOne from "./PostsOne";
import PostsNew from "./PostsNew";
import UsersNew from "./UsersNew";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}  />

            <Route exact path="/posts" component={PostsAll}  />
            <Route path="/posts/new" component={PostsNew}  />
            <Route path="/posts/:id(\d+)" component={PostsOne}  />
            <Route path="/posts/:category(\D+)" component={PostsAll}  />

            <Route exact path="/users" component={UsersNew}  />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
