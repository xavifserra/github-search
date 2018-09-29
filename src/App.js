import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import {githubApi} from './lib/github-services';

import './App.css';

class App extends Component {
  state = {
    list: [],
    status: 'loaded',
  }

  handleSubmit = (value) => {
    this.setState({status : 'loading'})

    githubApi.getUsers(value)
    .then(({ data }) => {
      this.setState({
        list: data.items,
        status: 'loaded'
      })
    })
    .catch((e)=>{
      this.setState({
        status: 'error'
      }
      )
    })
  }

  renderStatus = () => {
    const { status } = this.state;
    switch (status) {
      case 'loaded':
        return <List list={this.state.list}/>
        break;
      case 'loading':
        return 'Loading ..... '
        break;
      case 'error':
        return 'Wihtout connection .....'
        break;
      default:
        return ''
        break;
    }
  }
  render() {
    return (
      <div className="container">
        <Header >Github Search</Header>
        <Form onSubmit={this.handleSubmit}/>
        <ul>
          { this.renderStatus()  }
        </ul>
      </div>
    );
  }
}

export default App;
