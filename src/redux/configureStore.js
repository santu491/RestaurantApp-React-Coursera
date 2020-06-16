
import { createStore, combineReducers,applyMiddleware } from 'redux'
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders'
import { Dishes } from './dishes'
import {InitialFeedback} from './forms'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {createForms} from 'react-redux-form'
export const ConfigureStore = () => {
    let cominedReducer = combineReducers({
        dishes: Dishes,
        promotions: Promotions,
        comments: Comments,
        leaders: Leaders,
        ...createForms({
            feedback:InitialFeedback
        })
    })
    // let store = createStore(
    //     combineReducers({
    //         dishes: Dishes,
    //         promotions: Promotions,
    //         comments: Comments,
    //         leaders: Leaders
    //     })
    // )

    let store = createStore(cominedReducer,applyMiddleware(thunk,logger))
    return store
}