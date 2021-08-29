import React, { Component } from 'react';
import './passwordForm.css';
import LoginButton from '../LoginButton/loginButton';

class PasswordForm extends Component {
    render() {
        return <div className='passwordCard'>
            <div className='passwordInfos'>
                <label className='passwordLabel'>Senha</label>
                <input className='passwordInput' type='password' ></input>  
            </div>
            <LoginButton />
        </div>
    }
}

export default PasswordForm;