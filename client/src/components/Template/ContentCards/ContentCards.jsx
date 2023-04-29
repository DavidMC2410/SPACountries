
import React,{useEffect, useState} from 'react';
import Card from '../../Organism/Card/Card';
import { useSelector, useDispatch} from 'react-redux'
import { getAllCountries, getActivities } from '../../../redux/actions';
import Button from '../../Atom/Button';
import style from './ContentCards.module.css';

export default function ContentCards(){
    
  let dispatch = useDispatch();
  let allCountries = useSelector(state => state.countries);

  useEffect(()=>{
      dispatch(getAllCountries());
      dispatch(getActivities())
  },[])

  const [pag, setPag]=useState(1);

  const firstCard = (pag-1)* 10;
  const lastCard = firstCard+10;

  let countries = allCountries.slice(firstCard,lastCard)

    
  const maxPag=Math.ceil(allCountries.length/10);

  const handlePrevPage = () => {
    if (pag > 1) {
      setPag(pag - 1);
    }
    };
      
  const handleNextPage = () => {
        if (pag < maxPag) {
          setPag(pag + 1);
        }
      };

  return (
    <div className={style.container}>
      <div className={style.cardsContainer}>
        {countries.map(country=>(<Card
        key={country.id}
        id={country.id}
        img={country.flag}
        name={country.name}
        continent={country.continent}
        />))}
      </div>

      <div className={style.pagContainer}>
        {pag>1 &&<Button style={style.button} onClick={handlePrevPage} keyValue='<' text='<'/>}
        <p className={style.p}>{pag}/{maxPag}</p>
        {pag!==maxPag &&<Button style={style.button} onClick={handleNextPage} keyValue='>' text='>' />}
      </div>

    </div>)
}