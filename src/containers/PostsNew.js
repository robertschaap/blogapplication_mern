import React, { Component } from "react";
import PostForm from "../components/PostForm";

class PostsNew extends Component {
  state = {
    title: "",
    body: "",
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <main>
        <PostForm value={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </main>
    );
  }
}

export default PostsNew;
