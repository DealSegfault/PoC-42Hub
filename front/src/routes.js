import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/loginComponent'
import Hub from './components/Hub/hubComponent'
import SecurityMap from './components/SecurityMap/securityMapComponent'
import Sensor from './components/SecurityMap/Sensor'

import AuthComponent from './components/Auth/auth'
import Token from './components/Auth/token'



import Layout from './HOC/Layout/LayoutHOC'
import {Visibility} from "semantic-ui-react";

const Routes = (props) => {
    return (
        <Switch>
            <Route path={'/'} exact component={Login}/>
            <Route path={'/hub'} exact component={Hub}/>
            <Route path={'/auth'} exact component={AuthComponent} />
            <Route path={'/sensor'} exact component={Sensor} />
            <Route path={'/token/:token'} exact component={Token} />
            <Layout>
                <Route path={'/security_map'} exact component={SecurityMap} />
			</Layout>
        </Switch>
    );
};

export default Routes