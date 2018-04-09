import React, { Component } from "react";
// import Home from "./Home";
// import PostsAll from "./PostsAll";
import PostsOne from "./PostsOne";
import Layout from "./Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        {/* <Home /> */}
        {/* <PostsAll /> */}
        <PostsOne  />
      </Layout>
    );
  }
}

export default App;
