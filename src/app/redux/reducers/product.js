import { ADD_PRODUCT, } from '../types';


export default function (state = {}, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, addBank: action.payload }
        default:
            return state;
    }
}