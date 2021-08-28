import React, { Component } from 'react';
import "./loginForm.css";
import EmailForm from '../EmailForm/emailForm.js';
import PasswordForm from '../PasswordForm/passwordForm.js';
import Header from '../Header/header.js';

class LoginForm extends Component {
    render() {
        return <div>
            <Header />
            <EmailForm />
            <PasswordForm />
        </div>
    }
}

export default LoginForm;