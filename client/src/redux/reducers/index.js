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
                countries: auxStateAZ
            }
        }
        let auxStateAZReverse = auxStateAZ.reverse();
        return {
            ...state,
            countries: auxStateAZReverse
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
                countries: auxStatePopulation
            }
        }
        let auxStatePopulationReverse = auxStatePopulation.reverse();
        return {
            ...state,
            countries: auxStatePopulationReverse
        }
        
        case FILTER_COUNTRIES_CONTINENT:
            
        let auxFilterContinent=state.countries.filter(country=>country.continent===action.payload)

        return {
            ...state,
            countries:auxFilterContinent 
        }

        case FILTER_COUNTRIES_ACTIVITIES:
        
        let auxFilterActivity=state.countries.filter(country=>{
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
            countries: auxFilterActivity
        }
        default: return state;
    }
};

export default rootReducer;