import React, { Component } from "react";
import { connect } from "react-redux";
import { loadOnePost, getLoadOnePost } from "../redux";

import Post from "../components/Post";

class PostsOne extends Component {
  componentWillMount() {
    let { id } = this.props.match.params;

    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(json => this.props.loadOnePost(json));
  }

  render() {
    const { post, comments } = this.props.onePost;

    return (
      <main>
        <Post post={post} comments={comments} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  onePost: getLoadOnePost(state),
});

const mapDispatchToProps = {
  loadOnePost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsOne);
