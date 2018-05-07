import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var loginData = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }

        this.props.dispatch(actions.loginRequest(loginData));
        console.log(loginData);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="signup-form">
                <h3> Login </h3>
                <table>
                    <tbody>
                        <tr>
                            <td> Email: </td>
                            <td>
                                <input type="email" ref="email" />
                            </td>
                        </tr>
                        <tr>
                            <td> Password: </td>
                            <td> <input type="password" ref="password" /> </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button type="submit"> Login </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                Don't have an account?  <a href="/signup"> Signup </a>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapDispatchToProps
)(Login)