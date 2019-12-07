import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes'

export const Comments = (state = COMMENTS,action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT: 
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //concat is an immutable function used to show an object
            return state.concat(comment);
        default:
            return state;
    }
}