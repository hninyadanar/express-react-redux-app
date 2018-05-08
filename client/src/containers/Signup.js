import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';


class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.username = null;
        this.email = null;
        this.password = null;

        this.setUsernameRef = element => {
            this.username = element;
        };

        this.setEmailRef = element => {
            this.email = element;
        }

        this.setPasswordRef = element => {
            this.password = element;
        }

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        if (this.username) this.username.focus();
        if (this.email) this.email.focus();
        if (this.password) this.password.focus();

        e.preventDefault();
        var user = {
            username: this.username.value,
            email: this.email.value,
            password: this.password.value
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
                            <td> <input type="text" ref={this.setUsernameRef} /> </td>
                        </tr>
                        <tr>
                            <td> Email: </td>
                            <td> <input type="email" ref={this.setEmailRef} /> </td>
                        </tr>
                        <tr>
                            <td> Password: </td>
                            <td> <input type="password" ref={this.setPasswordRef} /> </td>
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