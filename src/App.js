import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';

import './App.css';

class App extends Component {
  state = {
    list: []
  }
  
  handleSubmit = (value) => {
    console.log(value);
    axios.get(`https://api.github.com/search/users?q=${value}+in:login`)
      .then(({ data }) => {
        this.setState({
          list: data.items
        })
      })
  }

  render() {
    return (
      <div className="container">
        <Header >Github Search</Header>
        <Form onSubmit={this.handleSubmit}/>
        <ul>
          {
            this.state.list.map((user) => {
              return <li key={user.login}>{user.login}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
