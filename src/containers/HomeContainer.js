import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts, getLoadPosts } from "../redux";
import PostTiles from "../components/PostTiles";

class HomeContainer extends Component {
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
