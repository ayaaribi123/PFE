import React from 'react';
import '../App.css';
import logo from '../image/logo.jpg';
import background from '../image/background.jpg';

function signup() {
	return (
			<div className="signup">
				<div className='signup'>
				<div className='App-image'>
      <img className='App-logo' src={logo} alt='logo'></img>
						<img className='background-image' scr={background} alt='background'></img>
					</div>
					<div id="top">
            <h1 id="home">Home</h1>
            <h1 id="about">About</h1>
            <h1 id="travel">Travel</h1>
            <h1 id="contact">Contact</h1>
        </div>
        <div class="signup-box">
            <h1>Sign up</h1>
            <h4>It's free !</h4>
            <form>
              <label>First Name</label>
              <input type="text"/>
              <label>Last Name</label>
              <input type="text"/>
              <label>Email</label>
              <input type="email"/>
              <label>Password</label>
              <input type="password"/>
              <label>Confirm Password</label>
              <input type="password"/>
              <input type="button" value="Submit" />
              <p class="p1">Already have an account ?<a href="signin.html"> Click Here</a></p>
            </form>
          </div>
										</div> 
        </div>
			
	);
}

export default signup;