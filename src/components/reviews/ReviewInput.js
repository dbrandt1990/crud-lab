import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurant.id
    }
    this.props.addReview(review)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review: </label>
          <input onChange={this.handleChange} type='text' value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
