
import React,{useEffect} from 'react';
import Card from '../../Organism/Card/Card';
import { useSelector, useDispatch} from 'react-redux'
import { getAllCountries } from '../../../redux/actions';

export default function ContentCards(){
    
    let dispatch = useDispatch();
    let countries = useSelector(state => state.countries);

    useEffect(()=>{
        dispatch(getAllCountries());
    },[])

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