import * as ActionTypes from './ActionTypes'

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