import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initToken } from "../../../store/login/action"

class Login extends Component {
    render() {
        return (
            <div>
                login
            </div>
        );
    }
}

export default connect(state => ({
    saveToken: state.saveToken
}), { initToken })(Login);