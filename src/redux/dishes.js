 
import * as ActionTypes from './ActionTypes'

export const Dishes = (state = {
    isLoading: true,
    dishes: [],
    errorMessage: null
}, action) => {
    switch (action.type) {
        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, dishes: [], errorMessage: null }

        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, dishes: [], errorMessage: action.payload }

        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, dishes: action.payload, errorMessage: null }

        default:
            return state;
    }
}