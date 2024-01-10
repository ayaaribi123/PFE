import React from 'react';
import '../App.css';
import logo from '../image/logo.jpg';
import background from '../image/background.jpg';

function signup() {
	return (
    <html>
      <head>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body style={{ backgroundImage: 'url(background.jpg)' }} className="bg">
        <div>
          <img className="logo" src="./logo.jpg" alt="Logo" />
          <h1 className="home">Home</h1>
          <h1 className="about">About</h1>
          <h1 className="contact">Contact</h1>
          <h1 className="signin">
            <a href="signin.html">
              <img src="signin.jpg" alt="Sign In" className="imgsignin" />
              Sign In
            </a>
          </h1>
        </div>
        <div className="signup-box">
          <h1>Sign up</h1>
          <h4>It's free!</h4>
          <form>
            <label>First Name</label>
            <input type="text" placeholder="" />
            <label>Last Name</label>
            <input type="text" placeholder="" />
            <label>Email</label>
            <input type="email" placeholder="" />
            <label>Password</label>
            <input type="password" placeholder="" />
            <label>Confirm Password</label>
            <input type="password" placeholder="" />
            <input type="button" value="Submit" />
            <p className="p1">
              Already have an account ?<a href="signin.html"> Click Here</a>
            </p>
          </form>
        </div>
      </body>
    </html>
  );
};
export default signup;
