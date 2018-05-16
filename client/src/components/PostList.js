import React from 'react';
import PropTypes from 'prop-types';
import Post from '../containers/Post';
import { List } from 'antd';

class PostList extends React.Component {
    render() {
        const posts = this.props.posts;

        return (
            <div>
                <h3>Posts</h3>
                <List
                    itemLayout="horizontal"
                    dataSource={posts}
                    renderItem={post => (
                        <List.Item>
                            <Post
                                key={post.id} post={post} likedPosts={this.props.likedPosts}>
                            </Post>
                        </List.Item>
                    )} />
            </div>
        )
    }

}
PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default PostList