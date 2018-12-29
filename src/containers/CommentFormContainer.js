import React, { Component } from "react";
import { connect } from "react-redux";
import { submitComment } from "../ducks/form";
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
