import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts, getLoadPosts } from "../redux";
import PostTiles from "../components/PostTiles";

class Home extends Component {
  componentWillMount() {
    this.props.posts;
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost = () => {
    fetch("/api/posts/")
      .then(res => res.json())
      .then(json => this.props.loadPosts(json));
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
)(Home);
