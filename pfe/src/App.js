// src/App.js
import React from 'react';
import './App.css';
import Header from './Header/Header';
import signin from './Log/signin';
import signup from './Log/signup';
import Footer from './log/footer';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Header />
    <div className='App'>
        <Footer />
      </div>
      <div className='App-body'>
        <signin />
      </div>
      <div className='App-body2'>
        <signup />
      </div>
    </React.Fragment>
  );
}

export default App;

