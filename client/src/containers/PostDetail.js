import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Divider, Icon } from 'antd';
import Details from './Details'
import CommentForm from '../components/CommentForm';
import CommentList from './CommentList';
import MainHeader from './MainHeader';
import '../index.css';


class PostDetail extends React.Component {

    componentDidMount() {
        const postId = this.props.match.params.postId;
        this.props.dispatch(actions.fetchPostDetailsRequest(postId));
        this.props.dispatch(actions.commentFetchRequest(postId));
    }

    render() {
        const details = this.props.details;
        let content = null;
        let commentForm = null;
        let comments = null;
        if (details) {
            content = <Details post={details} />
            comments = <CommentList comments={this.props.comments} />
        }

        const contentPostList =
            <div>
                {content}
                <Divider />
                {comments}
            </div>

        return (
            <MainHeader content={contentPostList} history={this.props.history} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    details: state.rootReducer.postDetail.details,
    comments: state.rootReducer.comment.commentList,
})

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail)
