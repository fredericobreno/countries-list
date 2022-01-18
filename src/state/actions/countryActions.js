import axios from 'axios';
import { COUNTRY_SUCCESS, COUNTRY_ERROR, COUNTRY_FETCHING } from '../types';

export const fetchCountries = ({ name }) => async dispatch => {
    try {
        dispatch({ type: COUNTRY_FETCHING })
        
        const result = await axios.get(name ? `https://restcountries.com/v3.1/name/${name}` : 'https://restcountries.com/v3.1/all');
        dispatch({
            type: COUNTRY_SUCCESS,
            payload: result.data
        })
    } catch (e) {
        dispatch({ type: COUNTRY_ERROR })
    }
}
