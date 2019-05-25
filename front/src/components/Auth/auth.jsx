import React, { useState, useEffect } from 'react'
import authService from '../../services/auth-service'
import { loginUser } from '../../actions/authActions'
import { connect } from 'react-redux'


class TokenComponent extends React.Component {

    state = {
        token: ""
    };

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
    }

    componentWillMount() {
        // this.props.dispatch(loginUser());
    }

    render() {

        return (
            <div>
                Hello
            </div>
        );
    }
}
function mapStateToProps(state) {
    const user = state.res;
    return {
        user
    };
}

export default connect(mapStateToProps)(TokenComponent);