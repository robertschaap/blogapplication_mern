// @flow
import React from "react";
import { connect } from "react-redux";
import { loadPosts, getLoadPosts } from "../ducks/posts";
import PostTiles from "../components/PostTiles";

type HomeContainerPropsType = {
  posts: Array<Object>,
  loadPosts: Function,
};

class HomeContainer extends React.Component<HomeContainerPropsType> {
  componentWillMount() {
    this.props.posts;
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <main>
        <PostTiles posts={posts} homepage />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  posts: getLoadPosts(state)
});

const mapDispatchToProps = {
  loadPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
