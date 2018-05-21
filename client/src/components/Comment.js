import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Comment = this.props.comment;
        const User = Comment.User;
        return (
            <div>
                {Comment.comment} <br />
                commended by <font color="blue">  {User.username} </font>
            </div>
        )
    }

}

export default Comment;