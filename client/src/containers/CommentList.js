import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import actions from '../actions';
import Comment from '../components/Comment';

class CommentList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.postId);
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




const mapStateToProps = (state, ownProps) => ({
    comments: state.rootReducer.comment.commentList,
})

const mapDispatchToProps = dispatch => ({
    fetchComments: (postId) => { dispatch(actions.commentFetchRequest(postId)) },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList)