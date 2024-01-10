import React from 'react';
import '../App.css';
import logo from '../image/logo.jpg';
import background from '../image/background.jpg';

const Signup = () => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
    <div style={{ backgroundImage: `url(${background})` }} className="bg"></div>
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
              Already have an account? <a href="signin.html">Click Here</a>
            </p>
          </form>
        </div>
      </body>
    </html>
  );
};

export default Signup;
