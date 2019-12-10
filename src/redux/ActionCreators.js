import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

export const addComment = (dishId,rating,author,comment)=>({
    //As every action contains a type
    type: ActionTypes.ADD_COMMENT,
    //The payload contains whatever needs to be carried in so the data that is sent back by the addComment
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    },2000);
}

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    //whatever the message is passed to the dishes failed will be shown here as payload
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})