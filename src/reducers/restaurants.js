import { combineReducers } from 'redux';
import { GET_LIST } from "../actions/actionTypes";

let initialState = { listData: [] };

function data(state = initialState, action) {
    
    switch (action.type) {
        case GET_LIST:
        console.log(action.data.data,"action.........")
            return { ...initialState, listData: action.data.data }
        default:
            return state
    }
}


const todoAppEx = combineReducers({
    data
})

export default todoAppEx