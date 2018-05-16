import React from 'react';
import { Redirect } from 'react-router'
import cookie from 'js-cookie'

class Profile extends React.Component {

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
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Profile;