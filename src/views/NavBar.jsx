import React, {Component} from 'react';
import Bootstrap from './Bootstrap';
class NavBar extends Component {
    constructor(){
        super();

        
    }
    // isSignedIn(){
    //     if(!this.props.user){
    //         console.log('false' + this.props.user)
    //         return (<li className="list-group-item list-group-item-action">
    //         <a className="nav-item" href="/users/sign_in">Sign in</a>
    //     </li>)
    //     } else {
    //         console.log('true navbar' + this.props.user)
    //         return (<li className="list-group-item list-group-item-action">
    //         <a className="nav-item" href="/users/sign_out">Sign out</a>
    //     </li>)
    //     }
    // }
  render() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto list-group list-group-horizontal">
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
  }
}

module.exports = NavBar;