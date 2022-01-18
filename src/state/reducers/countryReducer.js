import { COUNTRY_FETCHING, COUNTRY_SUCCESS, COUNTRY_ERROR } from '../types';

const INITIAL_STATE = {
    result: [],
    loading: false,
    error: false,
}

const countryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNTRY_FETCHING:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                result: action.payload,
                error: false,
            }
        case COUNTRY_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state
    }
};

export { countryReducer };
