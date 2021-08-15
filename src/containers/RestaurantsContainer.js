import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} restaurants={this.props.restaurants} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.manageRestaurants.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurant => dispatch({ type: 'ADD_RESTAURANT', restaurant }),
    deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
