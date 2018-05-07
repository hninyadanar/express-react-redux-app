import React from 'react';
import PropTypes from 'prop-types';
import Post from '../containers/Post';

const PostList = ({ posts }) => (
    <div>
        {posts.map(post =>
            <Post
                key={post.id} post={post}>
            </Post>
        )}
    </div>
)

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default PostList