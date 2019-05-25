import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login/loginComponent'
import Hub from './components/Hub/hubComponent'
import SecurityMap from './components/SecurityMap/securityMapComponent'
import Layout from './HOC/Layout/LayoutHOC'
import {Visibility} from "semantic-ui-react";

const Routes = (props) => {
    return (
        <Switch>
            <Route path={'/'} exact component={Login}/>
            <Layout>
                <Route path={'/security_map'} exact component={SecurityMap} />
                {/*<Route path={'/security_map'} exact component={SecurityMap} />*/}
            </Layout>
        </Switch>
    );
};

export default Routes