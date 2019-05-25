import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loginUser} from '../../actions/authActions'
import './login.css'
import Alert from "../Widget/Alert/alertComponent";
import { Link } from 'react-router-dom'
class LoginComponent extends Component {

    state = {
        alert: {
            status: false,
            type: '',
            msg: ''
        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
    }

    handleAlert = (alert) => {
        let newState = this.state;
        newState.alert.status = alert.status;
        newState.alert.type = alert.type;
        newState.alert.message = alert.message;
        this.setState({
            ...newState
        })
    };

    submitForm = (evt) => {
        evt.preventDefault();
        this.props.dispatch(loginUser());
    };

    render() {
        let alert = this.state.alert;
        return (
            <form id={'login_container'} onSubmit={this.submitForm}>
                <Alert alert={alert} handleAlert={this.handleAlert}/>
                {/* <a href="https://localhost:3000/hub"> */}
                <Link to={`/hub`}>
                    <button id={'login_button'}><img id={'logo_button'} src={'/assets/logo-42.png'}/>Connect</button>
                </Link>
                {/* </a> */}
            </form>
        );
    }
}

function mapStateToProps(state) {
    const user = state.res;
    return {
        user
    };
}

export default connect(mapStateToProps)(LoginComponent);