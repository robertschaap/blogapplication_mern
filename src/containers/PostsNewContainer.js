import React, { Component } from "react";
import { connect } from "react-redux";
import { submitPost } from "../redux";
import { getUser } from "../ducks/user";
import PostForm from "../components/PostForm";
import PageTitle from "../components/PageTitle";

class PostsNewContainer extends Component {
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

    this.props.submitPost(requestBody);

  }

  render() {
    return (
      <main>
        <PageTitle title= "Create Something New" />
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

const mapDispatchToProps = {
  submitPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsNewContainer);
