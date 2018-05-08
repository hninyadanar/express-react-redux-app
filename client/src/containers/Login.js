import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.email = null;
        this.password = null;

        this.setEmailRef = element => {
            this.email = element;
        }

        this.setPasswordRef = element => {
            this.password = element;
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        if(this.email) this.email.focus();
        if(this.password) this.password.focus();

        e.preventDefault();
        var loginData = {
            email: this.email.value,
            password: this.password.value
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
                                <input type="email" ref={this.setEmailRef} />
                            </td>
                        </tr>
                        <tr>
                            <td> Password: </td>
                            <td> <input type="password" ref={this.setPasswordRef} /> </td>
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