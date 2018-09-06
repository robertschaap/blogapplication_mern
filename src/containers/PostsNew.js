import React, { Component } from "react";
import PostForm from "../components/PostForm";

class PostsNew extends Component {
  state = {
    formData: {
      title: "",
      body: "",
    },
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/posts/new", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.formData)
    })
    .then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <main>
        <PostForm
          value={this.state.formData}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
      </main>
    );
  }
}

export default PostsNew;
