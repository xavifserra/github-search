import React, { Component } from 'react';

class Form extends Component {
  state = {
    inputValue: '',
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  }

  render () {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={inputValue} placeholder='type a username' onChange={this.handleInput}/>
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default Form;