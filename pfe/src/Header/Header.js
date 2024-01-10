import React from 'react'
import '../App.css'
import logo from '../image/logo.jpg';
import background from '../image/background.jpg';

export default function Header() {
  return (
	<div className='App-header'>
		<img className='App-logo' src={logo} alt='logo'></img>
		<img className='background-image' scr={background} alt='background'></img>
			<h1 class="home">Home</h1>
			<h1 class="about">About</h1>
			<h1 class="travel">Travel</h1>
			<h1 class="contact">Contact</h1>
			<h1 className="signin">
			<a href="signin.html">
		<img src="signin.jpg" alt="Sign In" className="imgsignin" />
              Sign In
            </a>
          </h1>
				</div>
  );
}
