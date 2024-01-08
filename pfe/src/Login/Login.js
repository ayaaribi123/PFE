import React , {useState } from "react";
import React from 'react';
import '../App.css';
import logo from '../image/logo.jpg';
import background from '../image/background.jpg';

function signin() {
	const [credentials, setcredentials] = useState=({
		email: undefined,
		password: undefined
	});

	const handelchange = e =>{
		setcredit(prev => ({ ...prev, [e.traget.id]: e.traget.value}));
	};

	const handleclick = e =>{
		e.preventdefaut()
	}

	return (
			<div className="Sign in">
				<div className='login'>
				<div className='App-image'>
      <img className='App-logo' src={logo} alt='logo'></img>
						<img className='background-image' scr={background} alt='background'></img>
							<p>Login to access the full dashboard</p>
					</div>
					<h1>Sign in</h1>
						<form onSubmit={handleclick}>
								<label>Email</label>
								<input type="email" placeholder="" onchange={handelchange}/>
								<label>Password</label>
								<input type="password" placeholder="" onchange={handelchange}/>
								<input type="button" value="Submit" />
								<p class="p2"> Not having an account? <a href="signup.html">Sign Up Here</a></p>
								</form>
								</div>
					</div>
			
	);
}

export default signin;