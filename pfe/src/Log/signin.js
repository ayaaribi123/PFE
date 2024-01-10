import React from 'react';
import '../App.css';
import logo from '../image/logo.jpg';
import background from '../image/background.jpg';

function signin() {
	return (
<div id="top">
    <img className="logo" src="./logo.jpg" />
    <h1 className="home">Home</h1>
    <h1 className="about">About</h1>
    <h1 className="contact">Contact</h1>
    <h1 className="signin">
      <a href="signin.html">
        <img src="signin.jpg" className="imgsignin" />
        Sign In
      </a>
    </h1>
  </div>
  <div className="login-box">
    <h1>Sign in</h1>
    <form>
      <label>Email</label>
      <input type="email" placeholder="" />
      <label>Password</label>
      <input type="password" placeholder="" />
      <input type="button" defaultValue="Submit" />
      <p className="p2">
        Not having an account? <a href="signup.html">Sign Up Here</a>
      </p>
    </form>
  </div>

export default signin;
