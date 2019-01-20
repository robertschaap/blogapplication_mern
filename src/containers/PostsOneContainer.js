// @flow
import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../ducks/auth";
import { getUser } from "../ducks/user";
import { loadOnePost, getLoadOnePost } from "../ducks/onePost";

import Post from "../components/Post";
import PageTitle from "../components/PageTitle";

type PostsOneContainerPropsType = {
  loadOnePost: Function,
  loggedIn: boolean,
  loggedInUser: Object,
  match: Object,
  onePost: Object,
};

class PostsOneContainer extends React.Component<PostsOneContainerPropsType> {
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
