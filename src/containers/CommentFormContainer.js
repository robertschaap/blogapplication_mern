import React, { Component } from "react";
import CommentForm from "../components/CommentForm";

class CommentFormContainer extends Component {
  state = {
    formData: {
      comment: ""
    }
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      formData: {
        comment: value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/comments/new", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.formData)
    })
    .then(res => {
      // TODO: handle reponse
      console.log(res);
    });
  }

  render() {
    return (
      <CommentForm
        value={this.state.formData}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default CommentFormContainer;
