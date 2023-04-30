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
import functionOrder from '../functionOrder/functionOrder'

const initialState= {
    countries:[],
    countryDetail:{},
    activities:[],
    countriesCache:[],
    filteredCountriesByContinent:[],
    filteredCountriesByActivities:[],
    order:''
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case RESET_COUNTRIES: return{
            ...state,
            countries: state.countriesCache,
        }
        
        case GET_ALL_COUNTRIES: return{
            ...state,
            countries: action.payload,
            countriesCache: action.payload
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
                    order:'A-Z'
                }
            }
            let auxStateAZReverse = auxStateAZ.reverse();
            return {
                ...state,
                countries: auxStateAZReverse,
                order:'Z-A'
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
                    order:'Descending'
                }
            }
            let auxStatePopulationReverse = auxStatePopulation.reverse();
            return {
                ...state,
                countries: auxStatePopulationReverse,
                order:'Ascending'
            }
        
        case FILTER_COUNTRIES_CONTINENT:

            let countriesContinent = [...state.countriesCache];

            if (state.filteredCountriesByActivities.length!==0){
                countriesContinent = [...state.filteredCountriesByActivities]
            }

            if (state.order !== ''){
                let aux = functionOrder(countriesContinent,state.order);
                countriesContinent=aux;
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

            if (state.order !== ''){
                let aux = functionOrder(countriesActivity,state.order);
                countriesActivity=aux;
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