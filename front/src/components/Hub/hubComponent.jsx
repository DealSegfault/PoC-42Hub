import React, {Component} from 'react'
import ProgressBar from '../Widget/ProgressBar/progressBarComponent'
import Alert from '../Widget/Alert/alertComponent'
import profileService from '../../services/profile-service'
import roomService from '../../services/room-service'
import './hub.css'

const MEComponent = (props) => {
    return (<div>
        <button id='OK' className={'button_choice'} >C'EST MOI</button>
    </div>)
}

class Hub extends Component {

    state = {
        alert_status: false,
        alert: {
            status: false,
            type: '',
            message: ''
        },
        room_status: '',
        me: false
    };

    componentWillMount() {
        this.socketIO();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        setTimeout(() => {
            this.socketIO()
        }, 1500)
    }

    socketIO = () => {
        roomService.fetchRoomStatus()
            .then((res) => {
                this.setState({
                    alert_status: res[1].alertState === 'MOVEMENT',
                    me: res[1].alertState === 'ALERT'
                })

            });
    };


    handleAlertBand = (alert) => {
        let newState = this.state;
        newState.alert.status = alert.status;
        newState.alert.type = alert.type;
        newState.alert.message = alert.message;
        this.setState({
            ...newState
        })
    };

    defuse = (evt) => {
        let alert = {status: true, type: 'success', message: 'Fausse alerte enregistrée !'};
        this.setState({
            alert_status: false,
            me: false
        }, () => {
            this.handleAlertBand(alert);
            profileService.fetchDiffuse();
        });
    };

    intruder = (evt) => {
        let alert = {status: true, type: 'error', message: 'La sécurité a été alerté !'};
        this.setState({
            alert_status: false,
            me: true
        }, () => {
            this.handleAlertBand(alert);
            profileService.fetchAlert();
        });
    };

    render() {
        let alert = this.state.alert_status;
        let alert_band = this.state.alert;
        let me = this.state.me;
        console.log(me)
        return (
            <div id={'hub_wrapper'}>
                <Alert alert={alert_band} handleAlert={this.handleAlertBand}/>
                <div id={'hub_container'}>
                    <div id='profile_pic' style={{backgroundImage: "url('/assets/mhalit.jpg')"}}/>
                    <p id={'hub_name'}>Micheal Halit</p>
                    <p id={'hub_login'}>mhalit</p>
                    <div id={'hub_room_container'}>
                        <p id={'hub_room'}>e4r5c3</p>
                        <p id={'hub_room_validity'}>7 jours</p>
                    </div>
                    {me && <button id='OK' className={'button_choice'} onClick={this.defuse}>C'EST MOI</button>}
                    {/*{me && <MEComponent onClick={this.defuse}/>}*/}
                    {alert &&
                    <div id={'alert_status'}>
                        <p id={'intruder_message'}>Une intrusion à été détectée !</p>
                        <ProgressBar/>
                        <div id={'intruder_choice'}>
                            <button id='OK' className={'button_choice'} onClick={this.defuse}>C'EST MOI</button>
                            <button id='NO' className={'button_choice'} onClick={this.intruder}>INTRUSION</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default Hub;