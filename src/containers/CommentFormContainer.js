// @flow
import React from "react";
import { connect } from "react-redux";
import { submitComment } from "../ducks/form";
import CommentForm from "../components/CommentForm";

type CommentFormContainerPropsType = {
  userId: string,
  postId: string,
  submitComment: Function,
};

type CommentFormContainerStateType = {
  formData: {
    comment: string,
  }
};

class CommentFormContainer extends React.Component<CommentFormContainerPropsType, CommentFormContainerStateType> {
  state = {
    formData: {
      comment: ""
    }
  }

  handleChange = (event: Event) => {
    const { target } = event;

    if (target instanceof HTMLInputElement) {
      this.setState({
        formData: {
          comment: target.value,
        }
      });
    }
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();

    const requestBody = {
      comment: this.state.formData.comment,
      userId: this.props.userId,
      postId: this.props.postId,
    };

    this.props.submitComment(requestBody);
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

const mapDispatchToProps = {
  submitComment,
};

export default connect(
  null,
  mapDispatchToProps,
)(CommentFormContainer);
