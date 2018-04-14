import React, { Component } from "react";
import { connect } from "react-redux";
import { loadOnePost, getLoadOnePost, getLoadComments } from "../redux";

import Post from "../components/Post";

class PostsOne extends Component {
  render() {
    const { post, comments } = this.props;

    return (
      <main>
        <Post post={post} comments={comments} />
      </main>
    );
  }
}
  
const mapStateToProps = state => ({
  post: getLoadOnePost(state),
  comments: getLoadComments(state)
});

const mapDispatchToProps = {
  loadOnePost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsOne);
