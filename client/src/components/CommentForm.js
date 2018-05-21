import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Icon } from 'antd';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.saveComment = this.saveComment.bind(this);
        this.state = {
            comment: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ comment: event.target.value })
    }

    saveComment(e) {
        e.preventDefault();
        var formData = {
            postId: this.props.postId,
            comment: this.state.comment
        }
        this.props.commentInfo(formData);
        this.setState({ comment: '' });

    }
    render() {
        return (
            <div>
                <form onSubmit={this.saveComment} id="commentForm" style={{ display: 'none' }}>
                    <textarea type="textarea" value={this.state.comment} onChange={this.handleChange} placeholder="Your Opinion" rows="4" cols="40" ></textarea> <br />
                    <button type="submit" size="small"> Submit </button>
                </form>
            </div>
        )
    }
}



export default CommentForm