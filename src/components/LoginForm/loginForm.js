import React, { Component } from 'react';
import "./loginForm.css";
import EmailForm from '../EmailForm/emailForm.js';
import PasswordForm from '../PasswordForm/passwordForm.js';
import Header from '../Header/header.js';
import ErrorMessage from '../ErrorMessage/errorMessage.js';

class LoginForm extends Component {
    render() {
        return <div>
            <div className='formEnter'>
                <Header />
                <EmailForm />
                <PasswordForm />
            </div>
            <ErrorMessage />
        </div>
    }
}

export default LoginForm;