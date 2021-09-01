import React, { Component } from 'react';
import './passwordForm.css';
import LoginButton from '../LoginButton/loginButton';
import { AuthContext } from "../../providers/auth";

function PasswordForm() {
    const { login, setLogin } = React.useContext(AuthContext);
    return (<div className='passwordCard'>
            <div className='passwordInfos'>
                <label className='passwordLabel'>Senha</label>
                <input className='passwordInput' type='password' onChange={(e) => setLogin({ email:login.email, password:e.target.value })} ></input>  
            </div>
            <LoginButton />
        </div>)
}

export default PasswordForm;