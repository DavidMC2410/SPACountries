import Bar from '../../Molecule/Bar/Bar';
import Select from '../../Atom/Select';
import Button from '../../Atom/Button';
import Label from '../../Atom/Label';
import { useSelector, useDispatch } from 'react-redux';
import {
    filterCountriesActivities, 
    filterCountriesContinent, 
    orderCountriesPopulation, 
    orderCountriesAZ, 
    getCountryByName,  
    getAllCountries} from '../../../redux/actions'

export default function MiddleBar(){
    
    const activities = useSelector(state=>state.activities);
    const dispatch = useDispatch();
    const arrayContinent = [
        "Africa",
        "Antarctica",
        "Asia",
        "Europe",
        "North America",
        "Oceania",
        "South America"
      ];
    const arrayAlphabet=['A-Z','Z-A'];
    const arrayPopulation=['Ascending','Descending']
    let activityName = activities.map(activity=> activity.name)

    const handleSearchBarChange = (value)=>{

            dispatch(getCountryByName(value));   

    };

    const handleSelectAlphabetChange = (event)=>{
        console.log(event);
        const {value} = event.target;
        console.log(value);
        dispatch(orderCountriesAZ(value))
    };

    const handleSelectPopulationChange = (event)=>{
        const {value} = event.target;
        console.log(value);
        dispatch(orderCountriesPopulation(value))
    };

    const handleSelectContinentChange = (event)=>{
        
        const {value} = event.target;
        console.log(value);
        
        dispatch(filterCountriesContinent(value))
    };

    const handleSelectActivityChange = (event)=>{
        
        const {value} = event.target;
        console.log(value);
        
        dispatch(filterCountriesActivities(value));
    };

    const handleResetChange = ()=>{
        dispatch(getAllCountries());
    }

    return(
    <div>

        <Label htmlfor='Bar' text='Search by Name' />
        <Bar id='Bar' onClick={handleSearchBarChange}/>

        <Label htmlfor='OrderAlphabet' text='Sort Alphabetically'/>
        <Select size='2' multiple={false} options={arrayAlphabet} id='OrderAlphabet' handle={handleSelectAlphabetChange} />

        <Label htmlfor='OrderPopulation' text='Sort by Population'/>
        <Select size='2' multiple={false} options={arrayPopulation} id='OrderPopulation' handle={handleSelectPopulationChange} />

        <Label htmlfor='FilterContinent' text='Filter by Continent'/>
        <Select size='5' multiple={false} options={arrayContinent} id='FilterContinent' select={handleSelectContinentChange} />

        <Label htmlfor='FilterActivity' text='Filter by Activity'/>
        <Select size='5' multiple={false} options={activityName} id='FilterActivity' select={handleSelectActivityChange}/>

        <Button text='Reset' onClick={handleResetChange}/>

    </div>)
}