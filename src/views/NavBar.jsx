import React, {Component} from 'react';
import Bootstrap from './Bootstrap';
class NavBar extends Component {
    isSignedIn(){
        if(!this.props.currentUser){
            return (<li className="list-group-item list-group-item-action">
            <a className="nav-item" href="/users/sign_in">Sign in</a>
        </li>)
        } else {
            console.log(this.props.title)
            return (<li className="list-group-item list-group-item-action">
            <a className="nav-item" href="/users/sign_out">Sign out</a>
        </li>)
        }
    }
  render() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto list-group list-group-horizontal">
                        <li className="list-group-item list-group-item-action">
                            <a className="nav-item" href="/">Lists</a>
                        </li>
                        {this.isSignedIn()}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
  }
}

module.exports = NavBar;