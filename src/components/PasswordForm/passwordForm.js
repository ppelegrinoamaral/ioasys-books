import React, { Component } from 'react';
import './passwordForm.css';

class PasswordForm extends Component {
    render() {
        return <div className='passwordCard'>
            <label className='passwordLabel'>Senha</label>
            <input className='passwordInput' type='password' ></input>
        </div>
    }
}

export default PasswordForm;