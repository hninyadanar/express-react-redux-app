import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import LoginForm from '../components/LoginForm'

const { Content, Header } = Layout;

class Login extends React.Component {


    render() {
        return (
            <Row type="flex" justify="center" align="middle" style={{ paddingTop: '30px' }} >
                <Col>
                    <div id="loginFormContainer" style={{ padding: '10px', height: '400px', width: '350px', background: 'lightblue' }}>
                        <h2> Login </h2>
                        <LoginForm handleSubmit={formData => this.props.dispatch(actions.loginRequest(formData))} />
                    </div>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: action => dispatch(action)
});

export default connect(
    mapDispatchToProps
)(Login)