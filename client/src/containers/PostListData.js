import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import actions from '../actions';
import NewPost from './NewPost';

class PostListData extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.logout();
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const content = this.props.fetching ? <div> Fetching .... </div> : <PostList posts={this.props.posts} />;
        return (<div>
            <h3>Posts</h3>
            <p> &nbsp; <a href="/logout" onClick={this.handleClick}> Logout </a></p> 
            <NewPost />
            {content}
        </div>)
    }
}

const mapStateToProps = state => ({
    posts: state.rootReducer.posts.list,
    fetching: state.rootReducer.posts.fetching,
    fetched: state.rootReducer.posts.fetchSuccess
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => {dispatch(actions.postsFetchRequest())},
    logout: () => {dispatch(actions.logoutRequest())}
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    //mapLogoutDispatchToProps
)(PostListData)