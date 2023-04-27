import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const ORDER_COUNTRIES_AZ = "ORDER_COUNTRIES_AZ";
export const ORDER_COUNTRIES_POPULATION = "ORDER_COUNTRIES_POPULATION";
export const FILTER_COUNTRIES_CONTINENT = "FILTER_COUNTRIES_CONTINENT";
export const FILTER_COUNTRIES_ACTIVITIES = "FILTER_COUNTRIES_ACTIVITIES";

export const filterCountriesActivities = (filter) => dispatch => {
    dispatch({
        type: FILTER_COUNTRIES_ACTIVITIES,
        payload: filter
    })
};

export const filterCountriesContinent = (filter) => dispatch => {
    dispatch({
        type: FILTER_COUNTRIES_CONTINENT,
        payload: filter
    })
};

export const orderCountriesPopulation = (order) => dispatch => {
    dispatch ({
        type: ORDER_COUNTRIES_POPULATION,
        payload: order
    })
};

export const orderCountriesAZ = (order) => dispatch => {
    dispatch ({
        type: ORDER_COUNTRIES_AZ,
        payload: order
    })
};

export const getAllCountries =  () => async dispatch => {
    return await axios.get(`http://localhost:3001/countries`)
    .then(({data}) => dispatch({
        type: GET_ALL_COUNTRIES,
        payload:data
    }))
};

export const getCountryByName = (name) => async dispatch => {
    return await axios.get(`http://localhost:3001/countries?name=${name}`)
    .then(({data}) => dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload:data
    }))
    .catch((error)=>{alert('No country was found')})
};

export const getCountryDetail = (id) => async dispatch => {
    return await axios.get(`http://localhost:3001/countries/${id}`)
    .then(({data}) => dispatch({
        type: GET_COUNTRY_DETAIL,
        payload:data
    }))
};

export const getActivities = () => async dispatch =>{
    return await axios.get(`http://localhost:3001/activities`)
    .then(({data}) => dispatch({
        type: GET_ACTIVITIES,
        payload:data
    }))
};

