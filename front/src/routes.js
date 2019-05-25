import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/loginComponent'
import Profile from './components/Profile/profileComponent'
import SecurityMap from './components/SecurityMap/securityMap'

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={Login}/>
            <Route path={'/hub'} exact component={Profile} />
            <Route path={'/security_map'} exact component={SecurityMap} />
        </Switch>
    );
};

export default Routes