import React from 'react';
import './loginButton.css';
import { AuthContext } from '../../providers/auth';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginButton() {
	const { login } = React.useContext(AuthContext);
	const history = useHistory();

	async function handleValidation(login) {
		const result = await axios
			.post(
				'https://books.ioasys.com.br/api/v1/auth/sign-in',
				{
					email: login.email,
					password: login.password,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((response) => {
				localStorage.setItem('token', response.headers.authorization);
				history.push('/books-page');
			})
			.catch((error) => {
				console.log(error.response);
			});
	}

	return (
		<div>
			<button
				className="enterbutton"
				type="button"
				onClick={() => handleValidation(login)}
			>
				Entrar
			</button>
		</div>
	);
}

export default LoginButton;
