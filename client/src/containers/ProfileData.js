import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie'
import Profile from '../components/Profile';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class ProfileData extends React.Component {
    componentDidMount() {
        this.props.profileRequest();
    }

    render() {
        const userId = cookie.get('userId');
        return (
            <Profile profile={this.props.profile} />
        )
    }

}

const mapStateToProps = (state, ownProps) => ({
    profile: state.rootReducer.profile.profile
})

const mapDispatchToProps = dispatch => ({
    profileRequest: () => { dispatch(actions.profileFetchRequest()) },
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    //mapLogoutDispatchToProps
)(ProfileData)