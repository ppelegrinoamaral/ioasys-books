import React, { Component } from 'react';
import './errorMessage.css';

class ErrorMessage extends Component {
    render() {
        return <div className='errorCard'>
            <span className='triangle'></span>
            <p className='errorAlert'>Email e/ou senha incorretos</p>
        </div>
    }
}

export default ErrorMessage;