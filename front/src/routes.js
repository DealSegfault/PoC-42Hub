import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import SecurityMap from './components/SecurityMap'

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