import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts, getLoadPosts } from "../redux";
import CategoryHeader from "../components/CategoryHeader";
import PostTiles from "../components/PostTiles";

class PostsAll extends Component {
  componentDidMount() {
    let { category } = this.props.match.params;

    fetch(`/api/posts/${category}`)
      .then(res => res.json())
      .then(json => this.props.loadPosts(json));
  }

  getCategory() {
    let { category } = this.props.match.params;

    if (category) {
      return category[0].toUpperCase()+category.slice(1);
    }

    return "All Posts";
  }

  render() {
    const { posts } = this.props;

    return (
      <main>
        <CategoryHeader category={this.getCategory()} />
        <PostTiles posts={posts} />
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
)(PostsAll);
