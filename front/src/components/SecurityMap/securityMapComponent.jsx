import React, {Component, useEffect, useState} from 'react';
import Cluster from '../Widget/Cluster/clusterComponent'
import {mapCluster} from '../../actions/clusterActions'
import roomService from '../../services/room-service'
import './security_map.css'

class SecurityMap extends Component {

    state = {
        room: false,
        map: []
    };

    componentWillMount() {
        this.socketIO();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        setTimeout(() => {
            this.socketIO()
        }, 1000)
    }

    socketIO = () => {
        roomService.fetchRoomStatus()
            .then((res) => {
                this.setState({
                    room: true,
                    map: res
                })
            });
    };

    render() {
        console.log(this.state.map);
        return (
            <div id={'security_map_container'}>
                <h2 id={'cluster_title'}>EARTH-616</h2>
                {this.state.room && <Cluster student={this.state.map}/>}
            </div>
        );
    }
}

export default SecurityMap;
// }
//
// const SecurityMap = (props) => {
//     const [map, setMap] = useState([])
//     const [loading, setLoading] = useState(false)
//
//     useEffect( () => {
//         const fetchMap = async () => {
//             let result = await roomService.fetchRoomStatus()
//             setMap(result)
//             setLoading(true)
//         };
//         fetchMap()
//     }, []);
//     console.log(loading, map)
//     return (
//             <div id={'security_map_container'}>
//                 <h2 id={'cluster_title'}>EARTH-616</h2>
//                 {loading && <Cluster student={map}/>}
//             </div>
//         );
// }

