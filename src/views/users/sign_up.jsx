import React, {Component} from 'react';
import Bootstrap from '../Bootstrap';
import NavBar from '../NavBar';
class Sign_Up extends Component {
  render() {
    return (
    <div>
        <Bootstrap />
        <NavBar />
        <h1>Sign up</h1>
        <form action="/users" method="post">
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small className="text-muted" id="emailHelp">email address must be a valid address</small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" aria-describedby="passwordHelp" placeholder="Enter password"></input>
                <small className="text-muted" id="passwordHelp"></small>
            </div>
            <div className="form-group">
                <label>Password Confirmation</label>
                <input type="password" className="form-control" name="passwordConfirmation" aria-describedby="passwordHelp" placeholder="Enter password Confirmation"></input>
                <br/>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
        </form>
    </div>
    );
  }
}

module.exports = Sign_Up;