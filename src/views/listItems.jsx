

import React, {Component} from 'react';
import Bootstrap from './Bootstrap';
import NavBar from './NavBar';
class ListItems extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    isPurchased(purchased){
        if(!purchased){
            return(<div><h2> - Not Purchased</h2></div>)
        } else {
            return(<div><h2> - Purchased</h2></div>)
        }
    }

    render() {
        return(//
        <div className="app" style={{padding: '2% 0% 0% 0%'}}>
            <Bootstrap/>
            <NavBar/>
            <a href="/">Back</a>
            <h1>{this.props.list.name}</h1>
            
            <form action={`/lists/${this.props.list.id}/create`} method="post">
                <input type="text" className="form-control" name="name" aria-describedby="nameHelp" placeholder="Enter Name of Item"></input>
                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
            <ul className="list-group">
                {this.props.list.items.map((item, index) => 
                <li className="list-group-item" style={{fontSize: '150%'}}key={index}>{item.name}{this.isPurchased(item.purchased)}
                    <form action={`/lists/${this.props.list.id}/${item.id}/destroy`} method="post">
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                    <form action={`/lists/${this.props.list.id}/${item.id}/update`} method="post">
                        <textarea className="form-control" name="name" defaultValue={item.name} placeholder="Name of Item"></textarea>
                        <select className="form-control" name="purchased">
                            <option value="false">Not Purchased</option>
                            <option value="true">Purchased</option>
                        </select>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </li>
                )}
            </ul>
        </div>)
    }
}

module.exports = ListItems;