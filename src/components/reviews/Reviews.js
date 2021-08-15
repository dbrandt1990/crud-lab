import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, deleteReview } = this.props;
    console.log(reviews)
    return (
      <ul>
        {
          reviews.map(review => {
            console.log(review)
            return (
              <Review key={review.id} review={review} deleteReview={deleteReview} />
            )
          })
        }
      </ul>
    );
  }
};

export default Reviews;