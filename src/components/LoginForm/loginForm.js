import React, { Component } from 'react';
import "./loginForm.css";
import EmailForm from '../EmailForm/emailForm.js'

class LoginForm extends Component {
    render() {
        return <div>
            <EmailForm />
        </div>
    }
}

export default LoginForm;