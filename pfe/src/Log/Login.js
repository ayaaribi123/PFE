import React from 'react';
import '../App.css';
import logo from '../image/logo.jpg';
import background from '../image/background.jpg';

function signin() {
	return (
			<div className="Sign in">
				<div className='login'>
				<div className='App-image'>
      <img className='App-logo' src={logo} alt='logo'></img>
						<img className='background-image' scr={background} alt='background'></img>
							<p>Login to access the full dashboard</p>
					</div>
					<h1>Sign in</h1>
						<form>
								<label>Email</label>
								<input type="email"/>
								<label>Password</label>
								<input type="password"/>
								<input type="button" value="Submit" />
								<p class="p2"> Not having an account? <a href="signup.html">Sign Up Here</a></p>
								</form>
								</div>
					</div>
			
	);
}

export default signin;