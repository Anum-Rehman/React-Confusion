import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
}
//As reducer is a pure function that's why we can't directly update the state
export const  Reducer = (state = initialState, action)=>{
    return state;
};