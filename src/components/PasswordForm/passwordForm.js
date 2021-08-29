import React, { Component } from 'react';
import './passwordForm.css';
import LoginButton from '../LoginButton/loginButton';

class PasswordForm extends Component {
    render() {
        return <div className='passwordCard'>
            <label className='passwordLabel'>Senha</label>
            <div className='passwordLoginButton'>
                <input className='passwordInput' type='password' ></input>
                <LoginButton />
            </div>
        </div>
    }
}

export default PasswordForm;