import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostTiles from "../components/PostTiles";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <PostTiles />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
