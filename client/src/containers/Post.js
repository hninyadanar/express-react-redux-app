import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

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
        return (
            <div>
                <div>
                    <p>
                        &nbsp;{this.props.post.content} <br />
                        <font size="2" color="red"> created by {this.props.post.User.username} </font><br/>
                        <button onClick={this.postLike}>Like</button>
                        <span>&nbsp;{this.props.post.like_count}</span>
                    </p>
                </div>
                <br />
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
