import React, {Component} from 'react';
import Bootstrap from './Bootstrap';
import NavBar from './NavBar';
class ListItems extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    Opened(){
        //console.log(this.props.list);
    }

    render() {
        return(
        <div className="app" style={{padding: '2% 0% 0% 0%'}}>
            <Bootstrap/>
            <NavBar/>
            <a href="/">Back</a>
            <h1>{this.props.list.name}</h1>
            {this.Opened()}
            <form action={`/lists/${this.props.list.id}/create`} method="post">
                <input type="text" className="form-control" name="name" aria-describedby="nameHelp" placeholder="Enter Name of Item"></input>
                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
            <ul className="list-group">
                {this.props.list.items.map((item, index) => 
                <li className="list-group-item" key={index}>{item.name}
                    <form action={`/lists/${this.props.list.id}/${item.id}/destroy`} method="post">
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                </li>
                )}
            </ul>
        </div>)
    }
}

module.exports = ListItems;