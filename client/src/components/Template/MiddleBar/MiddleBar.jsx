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
    getAllCountries} from '../../../redux/actions';
import style from './MiddleBar.module.css';

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
        event.preventDefault();
        const {value} = event.target;
        dispatch(orderCountriesAZ(value))
    };

    const handleSelectPopulationChange = (event)=>{
        event.preventDefault();
        const {value} = event.target;
        dispatch(orderCountriesPopulation(value))
    };

    const handleSelectContinentChange = (event)=>{
        event.preventDefault();
        const {value} = event.target;
        dispatch(filterCountriesContinent(value))
    };

    const handleSelectActivityChange = (event)=>{
        event.preventDefault();
        const {value} = event.target;
        dispatch(filterCountriesActivities(value));
    };

    const handleResetChange = ()=>{
        dispatch(getAllCountries());
    }

    return(
    <div className={style.container} >

        <div className={style.element}>
            <Label style={style.label} htmlfor='Bar' text='Search by Name ' />
            <Bar styleButton={style.inputButton} styleInput={style.inputBar} id='Bar' onClick={handleSearchBarChange}/>
        </div>

        <div className={style.element}>
            <Label style={style.label} htmlfor='OrderAlphabet' text='Sort Alphabetically '/>
            <Select styleOption={style.selectOption} style={style.select} size='1' multiple={false} options={arrayAlphabet} id='OrderAlphabet' select={handleSelectAlphabetChange} />
        </div>

        <div className={style.element}>
          <Label style={style.label} htmlfor='OrderPopulation' text='Sort by Population '/>
          <Select style={style.select} size='1' multiple={false} options={arrayPopulation} id='OrderPopulation' select={handleSelectPopulationChange} />
        </div>

        <div className={style.element}>
           <Label style={style.label} htmlfor='FilterContinent' text='Filter by Continent '/>
           <Select style={style.select} size='1' multiple={false} options={arrayContinent} id='FilterContinent' select={handleSelectContinentChange} />
        </div>

        <div className={style.element}>
          <Label style={style.label} htmlfor='FilterActivity' text='Filter by Activity '/>
           <Select style={style.select} size='1' multiple={false} options={activityName} id='FilterActivity' select={handleSelectActivityChange}/>
        </div>

        <div className={style.element}>
          <Button style={style.button} text='Reset' key='Reset' onClick={handleResetChange}/>
        </div>

    </div>)
}