import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts, getLoadPosts } from "../redux";
import CategoryHeader from "../components/CategoryHeader";
import PostTiles from "../components/PostTiles";

class PostsAllContainer extends Component {
  componentDidMount() {
    let { category } = this.props.match.params;

    this.props.loadPosts(category);
  }

  componentDidUpdate(prevProps) {
    let { category } = this.props.match.params;
    let { category: prevCategory } = prevProps.match.params;

    if (category != prevCategory) {
      this.props.loadPosts(category);
    }
  }

  getCategory() {
    let { category } = this.props.match.params;

    if (category) {
      let firstCharacter = /^[a-z]/;
      return category.replace(firstCharacter, c => c.toUpperCase());
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
)(PostsAllContainer);
