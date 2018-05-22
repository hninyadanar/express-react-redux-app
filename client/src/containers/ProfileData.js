import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie'
import Profile from '../components/Profile';
import MainHeader from './MainHeader';

class ProfileData extends React.Component {
    componentDidMount() {
        this.props.profileRequest();
    }

    render() {
        const userId = cookie.get('userId');
        const contentPostList = <Profile profile={this.props.profile} />

        return (
            <MainHeader content={contentPostList} history={this.props.history} />
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
    mapDispatchToProps
)(ProfileData)