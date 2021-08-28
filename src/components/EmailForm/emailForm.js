import React, { Component } from 'react';
import './emailForm.css';

class EmailForm extends Component {
    render() {
        return <div className='emailCard'>
            <label className='emailLabel'>Email</label>
            <input className='emailInput' type='email' name='email' value='books@ioays.com.br'></input>
        </div>
    }
}

export default EmailForm;