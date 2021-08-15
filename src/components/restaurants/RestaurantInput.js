import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.addRestaurant(this.state.text)
    // { console.log(this.props.restaurants) }
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div id='container'>
        <form id='form' onSubmit={this.handleSubmit}>
          <label id='label'>Restaurant: </label>
          <input
            onChange={this.handleChange}
            type='text'
            name='text'
            value={this.state.text}
            id='text' />
          <button type='submit' id='submit'>Submit</button>
        </form>
      </div>
    );
  }
};


export default RestaurantInput;
