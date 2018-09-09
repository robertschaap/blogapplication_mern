import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux";
import PostForm from "../components/PostForm";

class PostsNew extends Component {
  state = {
    formData: {
      title: "",
      body: "",
      category: "technology"
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

    const requestBody = {
      ...this.state.formData,
      userId: this.props.loggedInUser.id
    };

    fetch("/api/posts/new", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
    .then(res => {
      // TOOD: handle response/push redirect
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

const mapStateToProps = state => ({
  loggedInUser: getUser(state)
});

export default connect(
  mapStateToProps
)(PostsNew);
