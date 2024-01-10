// src/App.js
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Login from './Log/signin';
import Logout from './Log/signup';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Header />
      </div>
      <div className='App-body'>
        <Login />
      </div>
      <div className='App-body2'>
        <Logout />
      </div>
    </React.Fragment>
  );
}

export default App;

