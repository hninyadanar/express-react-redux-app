import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Divider, Icon } from 'antd';
import Details from './Details'
import CommentForm from '../components/CommentForm';
import Comments from './CommentList';
import '../index.css';


class PostDetail extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchPostDetailsRequest(this.props.match.params.postId));
    }

    render() {
        const details = this.props.details;
        let content = null;
        let commentForm = null;
        let comments = null;
        if (details) {
            content = <Details post={details} />
            comments = <Comments postId={details.id} />
        }

        console.log(' detail page current component', this.props.currentComponent);

        return (
            <div>
                {content}
                <Divider />
                {comments}

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    details: state.rootReducer.postDetail.details,
    currentComponent: state.rootReducer.main.currentComponent
})

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail)
