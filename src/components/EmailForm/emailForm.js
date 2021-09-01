import React from 'react';
import './emailForm.css';
import { AuthContext } from "../../providers/auth";

function EmailForm() {
    const { login, setLogin } = React.useContext(AuthContext);
        return (<div className='emailCard'>
            <label className='emailLabel'>Email</label>
            <input className='emailInput' type='email' name='email' onChange={(e) => setLogin({ email: e.target.value, password: login.password })} />
        </div>)
}

export default EmailForm;