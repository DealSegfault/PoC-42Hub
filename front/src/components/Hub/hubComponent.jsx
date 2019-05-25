import React, {Component} from 'react'
import ProgressBar from '../Widget/ProgressBar/progressBarComponent'
import Alert from '../Widget/Alert/alertComponent'
import './hub.css'

class Hub extends Component {

    state = {
        alert_status: true,
        alert: {
            status: false,
            type: '',
            message: ''
        }
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
            alert_status: false
        }, () => {
            this.handleAlertBand(alert);
        });
    };

    intruder = (evt) => {
        let alert = {status: true, type: 'error', message: 'La sécurité a été alerté !'};
        this.setState({
            alert_status: false
        }, () => {
            this.handleAlertBand(alert);
        });
    };

    render() {
        let alert = this.state.alert_status;
        let alert_band = this.state.alert;
        console.log(alert_band);
        return (
            <div id={'hub_wrapper'}>
                <Alert alert={alert_band} handleAlert={this.handleAlertBand}/>
                <div id={'hub_container'}>
                    <div id='profile_pic' style={{backgroundImage: "url('/assets/coco.jpg')"}} />
                    <p id={'hub_name'}>Shana Cohen</p>
                    <p id={'hub_login'}>shcohen</p>
                    <div id={'hub_room_container'}>
                        <p id={'hub_room'}>e4r5c3</p>
                        <p id={'hub_room_validity'}>7 jours</p>
                    </div>
                    {alert &&
                    <div id={'alert_status'}>
                        <p id={'intruder_message'}>Une intrusion à été détectée !</p>
                        <ProgressBar />
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