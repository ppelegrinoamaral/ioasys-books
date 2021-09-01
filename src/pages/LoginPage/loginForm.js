import React, { Component } from 'react';
import "./loginForm.css";
import EmailForm from '../../components/EmailForm/emailForm.js';
import PasswordForm from '../../components/PasswordForm/passwordForm.js';
import Header from '../../components/Header/header.js';
import ErrorMessage from '../../components/ErrorMessage/errorMessage.js';

class LoginForm extends Component {
    render() {
        return <div className='mainLoginPage'>
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