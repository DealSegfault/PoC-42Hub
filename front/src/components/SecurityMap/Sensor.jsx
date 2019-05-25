import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cluster from '../Widget/Cluster/clusterComponent'
import {sensorTriggered} from '../../actions/sensorAction'
import './security_map.css'

class SensorComponent extends Component {

    componentWillMount() {
        this.props.dispatch(sensorTriggered(1));
    }

    render() {
        return (
            <div>
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

export default connect(mapStateToProps)(SensorComponent);
