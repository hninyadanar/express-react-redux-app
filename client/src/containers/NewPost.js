import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Input } from 'antd';
const { TextArea } = Input;


class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.savePost = this.savePost.bind(this);
        this.state = {
            content: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ content: event.target.value })
    }

    savePost(e) {
        e.preventDefault();
        var post = {
            content: this.state.content
        }
        this.props.dispatch(actions.addPostRequest(post));
        this.setState({ content: '' });

    }

    render() {
        return (
            <div align="right">
                <form onSubmit={this.savePost}>
                    <TextArea type="Input.TextArea" value={this.state.content} onChange={this.handleChange} placeholder="New Post"></TextArea>
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