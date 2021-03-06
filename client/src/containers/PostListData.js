import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import actions from '../actions';
import NewPost from './NewPost';
import cookie from 'js-cookie'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
import Profile from './ProfileData';
import MainHeader from './MainHeader';

class PostListData extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.likedPostsAction();
    }

    render() {
        const contentPostList = <div>
            <NewPost />
            <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
                <PostList posts={this.props.posts} likedPosts={this.props.likedPosts} />
            </div>
        </div>


        return (
            <MainHeader content={contentPostList} history={this.props.history} />

        )
    }
}



const mapStateToProps = (state, ownProps) => ({
    posts: state.rootReducer.posts.list,
    fetching: state.rootReducer.posts.fetching,
    fetched: state.rootReducer.posts.fetchSuccess,
    likedPosts: state.rootReducer.posts.likedPosts,
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => { dispatch(actions.postsFetchRequest()) },
    likedPostsAction: () => { dispatch(actions.likedPostsRequest()) },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListData)