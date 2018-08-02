import {ADD_DATA } from '../actions/index';
import {combineReducers} from 'redux';

function addData(state=[],action){
    console.log('action:----->',action)
    switch(action.type){
        case ADD_DATA:
            state = action.items;
           // console.log('State',state)
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ addData })
export default rootReducer;
