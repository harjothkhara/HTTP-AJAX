import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {  
      friends:[]
    }
  }

componentDidMount() {
  axios.get(`http://localhost:5000/friends`)
    .then(req => {
      this.setState({ friends: req.data })
    })
    .catch(err => {console.log(err)})
}

  render() { 
    return (  
      <div className="App">
        {this.state.friends.map(item => <Friend key={item.id} data={item} /> )}
      </div>

    );
  }
}
 
export default App;
