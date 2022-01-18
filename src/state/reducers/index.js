import { combineReducers } from 'redux'
import { countryReducer } from './countryReducer';

const reducers = combineReducers({
    country: countryReducer
})

export default reducers;
