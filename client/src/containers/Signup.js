import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import SignupForm from '../components/SignupForm';


class Signup extends React.Component {



    render() {
        return (
            <Row type="flex" justify="center" align="middle" style={{ paddingTop: '30px' }} >
                <Col>
                    <div id="loginFormContainer" style={{ padding: '10px', height: '550px', width: '400px', background: 'lightblue' }}>
                        <h2> Signup </h2>
                        <SignupForm handleSubmit={formData => this.props.dispatch(actions.signupRequest(formData))}
                            checkEmail={email => this.props.dispatch(actions.checkExistingEmail(email))}
                            existEmail={this.props.existingEmail}
                        />
                    </div>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    existingEmail: state.rootReducer.signup.existingEmail,
})

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)