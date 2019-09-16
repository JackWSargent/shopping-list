import React, {component} from 'react';
import NavBar from './NavBar';
import Bootstrap from './Bootstrap';
//import './App.css';
class Index extends React.Component {
  constructor(){
    super()
    
    this.state = {
      user: []
    }
  }
  componentDidMount(){
    console.log(this.state.user);
  }
  isSignedIn(){
    if(!this.props.currentUser){
      this.setState({user: false})
      return (<a style={{paddingLeft: '1.5%'}} href="users/sign_in">Sign In to View Your Lists</a>)
    } else {
      this.setState({user: true})
      //console.log(this.props.lists);
      return (<div>
        <a style={{paddingLeft: '1.5%'}} href="users/sign_out">Sign Out</a>
        <form action="/lists/create" method="post">
          <input type="text" className="form-control" name="name" aria-describedby="nameHelp" placeholder="Enter Name of List"></input>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        <ul className="list-group">
        {this.props.lists.map((list, index) => 
          <li className="list-group-item" key={index}><a href={`/lists/${list.id}`}>{list.name}</a></li>
        )}
        </ul>
        </div>)
    }
  }
  render() {
    return (
      <div className="app" style={{padding: '2% 0% 0% 0%'}}>
        <Bootstrap/>
        <NavBar/>
        <h1 style={{padding: '0% 0% 0% 1.5%'}}>Shopping List</h1>
        {this.isSignedIn()}
      </div>
    );
  }
}
module.exports = Index;