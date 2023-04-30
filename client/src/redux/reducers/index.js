import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_DETAIL,
    GET_ACTIVITIES,
    ORDER_COUNTRIES_AZ,
    ORDER_COUNTRIES_POPULATION,
    FILTER_COUNTRIES_CONTINENT,
    FILTER_COUNTRIES_ACTIVITIES,
    RESET_COUNTRIES
} from '../actions';

const initialState= {
    countries:[],
    countryDetail:{},
    activities:[],
    countriesCache:[],
    countriesReset:[],
    filteredCountriesByContinent:[],
    filteredCountriesByActivities:[]
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case RESET_COUNTRIES: return{
            ...state,
            countries: state.countriesReset,
        }
        
        case GET_ALL_COUNTRIES: return{
            ...state,
            countries: action.payload,
            countriesCache: action.payload,
            countriesReset:action.payload
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
            let auxStateAZ=[...state.countries];

            auxStateAZ.sort((a, b)=> {
                const auxA= a.name.toLowerCase()
                const auxB= b.name.toLowerCase();
                if (auxA<auxB) return -1;
                if (auxA>auxB) return 1;
                return 0;
            })
            
            if (action.payload==="A-Z"){
                return{
                    ...state,
                    countries: auxStateAZ,
                    countriesCache: auxStateAZ
                }
            }
            let auxStateAZReverse = auxStateAZ.reverse();
            return {
                ...state,
                countries: auxStateAZReverse,
                countriesCache: auxStateAZReverse
            }

        case ORDER_COUNTRIES_POPULATION: 
            let auxStatePopulation=[...state.countries];

            auxStatePopulation.sort((a, b)=> {
                if (a.population<b.population) return -1;
                if (a.population>b.population) return 1;
                return 0;
            })
            
            if (action.payload==="Descending"){
                return{
                    ...state,
                    countries: auxStatePopulation,
                    countriesCache: auxStatePopulation
                }
            }
            let auxStatePopulationReverse = auxStatePopulation.reverse();
            return {
                ...state,
                countries: auxStatePopulationReverse,
                countriesCache: auxStatePopulationReverse
            }
        
        case FILTER_COUNTRIES_CONTINENT:

            let countriesContinent = [...state.countriesCache];

            if (state.filteredCountriesByActivities.length!==0){
                countriesContinent = [...state.filteredCountriesByActivities]
            }

            let auxFilterContinent = countriesContinent.filter(country=>country.continent===action.payload);

            return {
                ...state,
                countries:auxFilterContinent,
                filteredCountriesByContinent: auxFilterContinent
            }

        case FILTER_COUNTRIES_ACTIVITIES:

            let countriesActivity = [...state.countriesCache];

            if (state.filteredCountriesByContinent.length!==0){
                countriesActivity = [...state.filteredCountriesByContinent]
            }
        
            let auxFilterActivity = countriesActivity.filter(country=>{
                let hasActivity = false;
                for (const activity of country.activities) {
                    if (activity.name===action.payload){
                        hasActivity = true;
                    }
                }
                return hasActivity;
            })
            
            return {
                ...state,
                countries: auxFilterActivity,
                filteredCountriesByActivities:auxFilterActivity
            }
        default: return state;
    }
};

export default rootReducer;