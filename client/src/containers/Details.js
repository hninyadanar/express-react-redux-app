import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Icon, Button, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import CommentForm from '../components/CommentForm';
import '../index.css';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.postLike = this.postLike.bind(this);
        this.showCommentForm = this.showCommentForm.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(actions.likedPostsRequest());
    }

    postLike(e) {
        e.preventDefault();
        var data = {
            post_id: this.props.post.id
        }
        this.props.dispatch(actions.postLikeRequest(data));
    }

    showCommentForm() {
        var x = document.getElementById("commentForm");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    render() {
        let post = this.props.post;
        let user = this.props.post.User;
        let icon = <Icon type="like" onClick={this.postLike} />;
        const likedPosts = this.props.likedPosts;
        if (this.props.detailLikedPost) {
            post = this.props.detailLikedPost
        }

        if (likedPosts) {

            const likedPost = likedPosts.find(
                post => post.post_id === this.props.post.id
            );

            if (likedPost) {
                icon = <Icon type="like" onClick={this.postLike} style={{ color: 'blue' }} />
            }
        }

        return (
            <div>
                <Avatar size="small" src={`/api/user/profile/${post.User.id}`} />
                <font color="blue"> {post.User.username} </font> <br /><br />
                {post.content} <br /><br />
                {icon}
                <span>&nbsp;{post.like_count}</span>
                <span>&nbsp;&nbsp;</span>
                <span onClick={this.showCommentForm} > <Icon type="message" /> Comment </span>
                <CommentForm postId={post.id} commentInfo={formData => this.props.dispatch(actions.addCommentRequest(formData))} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    likedPosts: state.rootReducer.posts.likedPosts,
    detailLikedPost: state.rootReducer.posts.detailLikedPost
})

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)
