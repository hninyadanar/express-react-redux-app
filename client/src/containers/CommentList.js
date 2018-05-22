import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import actions from '../actions';
import Comment from '../components/Comment';

class CommentList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const comments = this.props.comments;
        return (
            <div>
                Comments
                <List
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={comment => (
                        <List.Item>
                            <Comment
                                key={comment.id} comment={comment} >
                            </Comment>
                        </List.Item>
                    )} />
            </div>
        )
    }
}

export default CommentList