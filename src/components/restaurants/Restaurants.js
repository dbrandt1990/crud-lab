import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    if (this.props.restaurants) {
      return (
        <ul>
          {
            this.props.restaurants.map(restaurant => {
              return (
                <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
              )
            })
          }
        </ul>
      );
    } else { return (<ul></ul>) }
  }
};

export default Restaurants;