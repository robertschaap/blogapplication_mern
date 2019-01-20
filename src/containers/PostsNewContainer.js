// @flow
import React from "react";
import { connect } from "react-redux";
import { submitPost } from "../ducks/form";
import { getUser } from "../ducks/user";
import PostForm from "../components/PostForm";
import PageTitle from "../components/PageTitle";

type PostsNewContainerPropsType = {
  loggedInUser: Object,
  submitPost: Function,
};

type PostsNewContainerStateType = {
  formData: {
    title: string,
    body: string,
    category: string,
  },
};

class PostsNewContainer extends React.Component<PostsNewContainerPropsType, PostsNewContainerStateType> {
  state = {
    formData: {
      title: "",
      body: "",
      category: "technology"
    },
  }

  handleChange = (event: Event) => {
    const { target } = event;

    if (target instanceof HTMLInputElement) {
      const { name, value } = target;

      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value
        }
      });
    }
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
