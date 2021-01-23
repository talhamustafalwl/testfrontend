import { combineReducers } from 'redux';
import product from './product'
import loader from './loader';
const rootReducer = combineReducers({
    loader, product
});

export default rootReducer;