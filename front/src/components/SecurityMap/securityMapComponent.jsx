import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cluster from '../Widget/Cluster/clusterComponent'
import {mapCluster} from '../../actions/clusterActions'
import './security_map.css'

class SecurityMap extends Component {

    state = {

    };

    componentWillMount() {
        this.props.dispatch(mapCluster());
    }

    componentWillReceiveProps(nextProps, nextContext) {
    }

    render() {
        return (
            <div id={'security_map_container'}>
                <h2 id={'cluster_title'}>EARTH-616</h2>
                <Cluster student={this.props.map}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const map = state.security;
    return {
        map
    };
}

export default connect(mapStateToProps)(SecurityMap);
