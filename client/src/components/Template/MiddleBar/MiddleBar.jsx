import React, { useEffect } from 'react';
import Search from '../../Organism/Search/Search';
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
    let activityName = activities.map(activity=> activity.name)

    const handleSearchBarChange = (event)=>{
        const { value } = event.target.value;
        dispatch(getCountryByName(value));
    };

    const handleSelectAlphabetChange = (event)=>{
        const {value} = event.target.value;
        dispatch(orderCountriesAZ(value))
    };

    const handleSelectPopulationChange = (event)=>{
        const {value} = event.target.value;
        dispatch(orderCountriesPopulation(value))
    };

    const handleSelectContinentChange = (event)=>{
        const {value} = event.target.value;
        dispatch(filterCountriesContinent(value))
    };

    const handleSelectActivityChange = (event)=>{
        const {value} = event.target.value;
        dispatch(filterCountriesActivities(value));
    };

    const handleResetChange = ()=>{
        dispatch(getAllCountries());
    }

    return(
    <div>

        {/*<Label />
        <Search />

        <Label />
        <Select />

        <Label />
        <Select />

        <Label />
        <Select />

        <Label />
        <Select />

        <Label />
        <Select />

        <Label />
        <Select />

    <Button />*/}

    </div>)
}