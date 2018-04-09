import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import PostsAll from "./PostsAll";
import PostsOne from "./PostsOne";
import Layout from "./Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" component={Home}  />
          <Route path="/" component={PostsAll}  />
          <Route path="/" component={PostsOne}  />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
