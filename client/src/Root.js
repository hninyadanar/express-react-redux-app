import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import cookie from 'js-cookie'
import history from './history'
import LoginPage from './containers/Login'
import SignupPage from './containers/Signup'
import MainPage from './containers/Main'
import Logout from './components/Logout';
import Profile from './containers/ProfileData';

function isLoggedIn() {
    console.log("COOKIE");
    console.log(cookie.get('authenticated'));
    return cookie.get('authenticated') === 'true';
}

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}


const PrivateRoute = ({ component, redirectTo, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return isLoggedIn() ? (
                renderMergedProps(component, routeProps, rest)
            ) : (
                    <Redirect to={{
                        pathname: redirectTo,
                        state: { from: routeProps.location }
                    }} />
                );
        }} />
    );
};

const Main = () => (
    <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/logout' component={Logout} />
        <PrivateRoute component={MainPage} redirectTo="/login" exact path="/" />
        <PrivateRoute component={Profile} redirectTo="/login" exact path="/profile" />

    </Switch>
);

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Main />
        </Router>
    </Provider>
);

export default Root;