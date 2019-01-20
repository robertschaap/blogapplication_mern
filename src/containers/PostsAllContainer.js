// @flow
import React from "react";
import { connect } from "react-redux";
import { loadPosts, getLoadPosts } from "../ducks/posts";
import CategoryHeader from "../components/CategoryHeader";
import PostTiles from "../components/PostTiles";
import PageTitle from "../components/PageTitle";

type PostsAllContainerPropsType = {
  posts: Array<Object>,
  loadPosts: Function,
  match: Object,
};

class PostsAllContainer extends React.Component<PostsAllContainerPropsType> {
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

    const currentPageHeader = this.getCategory();

    return (
      <main>
        <PageTitle title={currentPageHeader} />
        <CategoryHeader category={currentPageHeader} />
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
