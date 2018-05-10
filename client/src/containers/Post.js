import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Icon, Button } from 'antd';
import '../index.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.postLike = this.postLike.bind(this);
    }

    postLike(e) {
        e.preventDefault();
        var data = {
            post_id: this.props.post.id
        }
        this.props.dispatch(actions.postLikeRequest(data));
    }



    render() {
        const likedPosts = this.props.likedPosts;
        const likedPost = likedPosts.find(
            post => post.post_id === this.props.post.id
        );

        let icon = <Icon type="like" onClick={this.postLike} />;
        if (likedPost) {
            icon = <Icon type="like" onClick={this.postLike} style={{ color: 'blue' }} />
        }

        return (
            <div>
                {this.props.post.content} <br />
                created by <font color="blue"> {this.props.post.User.username} </font><br />
                {icon}
                <span>&nbsp;{this.props.post.like_count}</span>
            </div>
        )


    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapDispatchToProps
)(Post)
