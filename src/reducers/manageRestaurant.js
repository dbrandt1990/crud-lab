import cuid from 'cuid';

const initialRestaurants = { restaurants: [] }
const initialReviews = { reviews: [] }


export const manageRestaurants = (state = initialRestaurants, action) => {
    switch (action.type) {
        case 'ADD_RESTAURANT':

            const restaurant = { text: action.restaurant, id: cuid() }

            return state = { ...state, restaurants: [...state.restaurants, restaurant] }

        case 'DELETE_RESTAURANT':

            return state = { ...state, restaurants: state.restaurants.filter(r => r.id !== action.id) }

        default:
            return state
    }
}

export const manageReviews = (state = initialReviews, action) => {
    switch (action.type) {
        case 'ADD_REVIEW':

            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() }

            return state = { ...state, reviews: [...state.reviews, review] }

        case 'DELETE_REVIEW':

            return state = { ...state, reviews: state.reviews.filter(r => r.id !== action.id) }

        default:
            return state
    }

}


