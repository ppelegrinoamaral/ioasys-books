import React, { Component } from 'react';
import './header.css';
import Logo from '../../assets/Logo.png';

class Header extends Component {
	render() {
		return (
			<div className="headerCard">
				<img className="headerLogo" src={Logo}></img>
				<h1 className="headerTitle">Books</h1>
			</div>
		);
	}
}

export default Header;
