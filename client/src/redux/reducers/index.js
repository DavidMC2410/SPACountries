import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_DETAIL,
    GET_ACTIVITIES,
    ORDER_COUNTRIES_AZ,
    ORDER_COUNTRIES_POPULATION,
    FILTER_COUNTRIES_CONTINENT,
    FILTER_COUNTRIES_ACTIVITIES

} from '../actions';

const initialState= {
    countries:[],
    countryDetail:{},
    activities:[],
    countriesToDisplay:[],

}

const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_ALL_COUNTRIES: return{
            ...state,
            countries: action.payload
        };
        case GET_COUNTRY_BY_NAME: return{
            ...state,
            countries: action.payload
        }
        case GET_COUNTRY_DETAIL: return{
            ...state,
            countryDetail:action.payload
        }
        case GET_ACTIVITIES: return{
            ...state,
            activities:action.payload
        }

        case ORDER_COUNTRIES_AZ: 
        if (action.payload==="A-Z"){
            return{
                ...state,
                countries: state.countries.sort((a, b)=> a.name.toLowerCase()-b.name.toLowerCase())
            }
        }else{
            return{
                ...state,
                countries: state.countries.sort((a, b)=> b.name.toLowerCase()-a.name.toLowerCase())
            }
        }
        case ORDER_COUNTRIES_POPULATION: 
        if (action.payload==="ascendent"){
            return{
                ...state,
                countries: state.countries.sort((a, b)=> a.population-b.population)
            }
        }else{
            return{
                ...state,
                countries: state.countries.sort((a, b)=> b.population-a.population)
            }
        }
        
        case FILTER_COUNTRIES_CONTINENT:return {
            ...state,
            countries: state.countries.filter(country=>country.continent===action.payload)
        }
        case FILTER_COUNTRIES_ACTIVITIES:return {
            ...state,
            countries: state.countries.filter(country=>{
                let hasActivity = false;
                for (const activity of country.activities) {
                    if (activity.name===action.payload){
                        hasActivity = true;
                    }
                }
                return hasActivity;
            })
        }
        default: return state;
    }
};

export default rootReducer;