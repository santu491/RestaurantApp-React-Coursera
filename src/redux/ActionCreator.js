import * as ActionTypes from './ActionTypes';

import {DISHES} from '../shared/dishes'

export const addComment=(dishId,rating,author,comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
    dishId:dishId,
    rating:rating,
    comment:comment,
    author:author
}})

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true))
    
    setTimeout(()=>{dispatch(addDishes(DISHES))},2000)

}

export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
})

export const dishFailed=(errorMessage)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errorMessage
})

export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
})