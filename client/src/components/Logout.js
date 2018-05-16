import React from 'react';
import { Redirect } from 'react-router'

class Logout extends React.Component {

    render() {
        return (
            <Redirect to='/login' />
        )
    }
}

export default Logout;