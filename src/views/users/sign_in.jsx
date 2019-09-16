import React, {Component} from 'react';
import Bootstrap from '../Bootstrap';
import NavBar from '../NavBar';
class Sign_In extends Component {
  render() {
    return (
    <div className="app">
        <Bootstrap />
        <NavBar />
        <h1>Sign In</h1>
        <a href="/users/sign_up/">Create an Account</a>
        <br/>
        <form action="/users/sign_in" method="POST">
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email"></input>            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" aria-describedby="passwordHelp" placeholder="Enter password"></input>
                <small className="text-muted" id="passwordHelp"></small>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    </div>
    );
  }
}

module.exports = Sign_In;