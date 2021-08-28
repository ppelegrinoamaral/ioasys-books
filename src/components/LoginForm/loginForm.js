import React, { Component } from 'react';
import "./loginForm.css";
import EmailForm from '../EmailForm/emailForm.js'
import PasswordForm from '../PasswordForm/passwordForm.js'

class LoginForm extends Component {
    render() {
        return <div>
            <EmailForm />
            <PasswordForm />
        </div>
    }
}

export default LoginForm;