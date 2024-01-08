import React from 'react';
import './App.css';
import Header from '../src/Header/Header.js';
import Login from '../src/Login/Login.js';


function App() {
	return (

			<React.Fragment>
					<div className='App'>
					<Header/>
			</div>
			<div className='App-body'>
					<Login/>
			</div>
			</React.Fragment>

	);
}

export default App;