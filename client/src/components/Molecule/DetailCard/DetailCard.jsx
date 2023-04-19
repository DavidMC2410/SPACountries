import style from './DetailCard.module.css';
import React from 'react';


export default function DetailCard(props){

    return (
    <div className={style.container}>
        <button >Back</button>
        <img scr={props.flag} alt='flag_img'/>
        <p>ID: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Continent: {props.continent}</p>
        <p>Capital: {props.capital}</p>
        {props.subregion && <p>Subregion: {props.subregion}</p>}
        {props.area && <p>Area: {props.area}</p>}
        <p>Population: {props.population}</p>
    </div>)
}