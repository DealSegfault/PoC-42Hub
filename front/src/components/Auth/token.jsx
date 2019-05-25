import React, { useState, useEffect } from 'react'
import authService from '../../services/auth-service'
import { loginUser } from '../../actions/authActions'
import { connect } from 'react-redux'


class TokenComponent extends React.Component {

    state = {
        token: ""
    };
    
    componentWillMount() {
        const code = this.props.match.params.token
        console.log(code)
        this.setState({token: code})
    }
    render() {
        console.log(this.props)
        return (
            <div>
                    Working your code is {this.state.token}
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