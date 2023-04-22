import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getAllCountries } from '../../../redux/actions'
import Card from '../../Organism/Card/Card';

export default function ContentCards(){
    let dispatch = useDispatch();
    let countries = useSelector(state => state.countries);

    useEffect(()=>{
        dispatch(getAllCountries());
    },[dispatch])
    

    return (
    <div>
        <h1>Y por ultimo, aqui deberia ir las cards</h1>
        {countries.map(country=>(<Card
        key={country.id}
        id={country.id}
        img={country.flag}
        name={country.name}
        continent={country.continent}
        />))}
    </div>)
}