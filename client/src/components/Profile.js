import React from 'react';
import { Redirect } from 'react-router';
import cookie from 'js-cookie';
import moment from 'moment';
import { Row, Col, Button, Modal } from 'antd';
import EditForm from './EditForm';


class Profile extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    render() {
        const userId = cookie.get('userId');

        return (
            <div style={{ padding: 24, textAlign: 'left' }}>

                <table>
                    <tbody>
                        <tr>
                            <td colSpan='2'>
                                <img src={`/api/user/profile/${userId}`} width="200px" height="200px" />
                            </td>
                        </tr>
                        <tr>
                            <th> Name: </th>
                            <td> {this.props.profile.username} </td>
                        </tr>
                        <tr>
                            <th> Email: </th>
                            <td> {this.props.profile.email} </td>
                        </tr>
                        <tr>
                            <th> Gender: </th>
                            <td> {this.props.profile.gender} </td>
                        </tr>
                        <tr>
                            <th> Birthday: </th>
                            <td> {this.props.profile.birthday} </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align='right'> <Button onClick={this.showModal}> Edit </Button> </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <Modal
                        title="Edit Information"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <EditForm info={this.props.profile} />

                    </Modal>
                </div>

            </div >
        )
    }
}

export default Profile;