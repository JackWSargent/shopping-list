import React, {component} from 'react';
import NavBar from './NavBar';
import Bootstrap from './Bootstrap';
//import './App.css';
class Index extends React.Component {
  constructor(){
    super()
    
    this.state = {
      user: null ,
    }
  }

  isSignedIn(){
    if(!this.props.currentUser){
      return (<a href="users/sign_in">Sign In to View Your Lists</a>)
    } else {
      console.log(this.props)
    }
  }
  render() {
    
    return (
      <div style={{padding: '2% 0% 0% 2%'}}>
        <Bootstrap/>
        <NavBar currentUser={this.state.currentUser}/>
        <h1>Shopping List App</h1>
        {this.isSignedIn()}
      </div>
    );
  }
}

module.exports = Index;
