import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';


class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.savePost = this.savePost.bind(this);
        this.state = {
            content: ''
        }
    }

    savePost(e) {
        e.preventDefault();
        var post = {
            content: this.refs.content.value
        }

        this.props.dispatch(actions.addPostRequest(post));
        this.setState({ content: '' });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.savePost} className="signup-form">
                    <h3> New Post </h3>
                    <textarea type="text" ref="content" value={this.state.content}
                    onChange={(e, newValue) => this.setState({ content: newValue })} > </textarea> <br />
                    <button type="submit"> Post </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapDispatchToProps
)(NewPost)