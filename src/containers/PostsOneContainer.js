import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuth, getUser } from "../redux";
import { loadOnePost, getLoadOnePost } from "../ducks/onePost";

import Post from "../components/Post";
import PageTitle from "../components/PageTitle";

class PostsOneContainer extends Component {
  componentWillMount() {
    let { id } = this.props.match.params;

    this.props.loadOnePost(id);
  }

  render() {
    const { post, comments } = this.props.onePost;
    const { loggedIn, loggedInUser } = this.props;

    if (!post || !comments) {
      return null;
    }

    return (
      <main>
        <PageTitle title={post.postBody.title} />
        <Post
          post={post}
          comments={comments}
          loggedIn={loggedIn}
          loggedInUser={loggedInUser} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  onePost: getLoadOnePost(state),
  loggedIn: getAuth(state),
  loggedInUser: getUser(state),
});

const mapDispatchToProps = {
  loadOnePost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsOneContainer);
