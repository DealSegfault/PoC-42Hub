import React, {Component} from 'react'
import {Button, Progress} from 'semantic-ui-react'
import axios from 'axios'
import './progress_bar.css'
import profileService from '../../../services/profile-service'

export default class ProgressBar extends Component {
    state = {
        end: false,
        percent: 0,
        alert: {
            status: false,
            type: 'true',
            message: 'La sécurité a été alerté !'
        }
    };

    componentDidMount() {
        this.incrementProgressBar(this.state.percent);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextState.percent < 100) {
            this.incrementProgressBar(nextState.percent);
        } else {
            // profileService.fetchAlert();
        }
    }

    incrementProgressBar = (percent) => {
        setTimeout(() => this.setState({
            percent: percent + 1.6
        }), 1000)
    };

    render() {
        return (
            <div id={'progress_bar'}>
                <Progress percent={this.state.percent} indicating/>
                <p id={'progress_percent'}>{Math.floor(this.state.percent)}%</p>
            </div>
        )
    }
}