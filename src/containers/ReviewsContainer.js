import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    console.log("reviews", reviews)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} />
        <Reviews reviews={reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.manageReviews.reviews }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
    deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
