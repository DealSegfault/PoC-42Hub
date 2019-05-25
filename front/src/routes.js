import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/loginComponent'
import Profile from './components/Profile/profileComponent'
import SecurityMap from './components/SecurityMap/securityMap'
import Layout from './HOC/Layout/LayoutHOC'
import {Visibility} from "semantic-ui-react";

const Routes = (props) => {
    return (
        <Switch>
            <Route path={'/'} exact component={Login}/>
            <Layout>
                <Route path={'/hub'} exact component={Profile} />
                {/*<Route path={'/security_map'} exact component={SecurityMap} />*/}
            </Layout>
        </Switch>
    );
};

export default Routes