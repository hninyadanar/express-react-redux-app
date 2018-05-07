import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        var user = {
            username: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }

        this.props.dispatch(actions.signupRequest(user));
        console.log(user);
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className="signup-form">
                <h3> Sign Up </h3>
                <table>
                    <tbody>
                        <tr>
                            <td> Username: </td>
                            <td> <input type="text" ref="username" /> </td>
                        </tr>
                        <tr>
                            <td> Email: </td>
                            <td> <input type="email" ref="email" /> </td>
                        </tr>
                        <tr>
                            <td> Password: </td>
                            <td> <input type="password" ref="password" /> </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right"><button type="submit"> signup </button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapDispatchToProps
)(Signup)