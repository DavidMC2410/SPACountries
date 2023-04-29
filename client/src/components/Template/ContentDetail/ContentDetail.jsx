import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCountryDetail } from '../../../redux/actions'
import { useEffect } from "react";
import style from './ContentDetail.module.css'

export default function ContentDetail(props){

    const id = props.countryId

    console.log('Estoy ahora en el componente ContentDetail y se supone que el id es: ', id);
    
    let dispatch = useDispatch();
    let detail = useSelector(state => state.countryDetail);

    useEffect(()=>{
        dispatch(getCountryDetail(id));
    },[])

    console.log(detail);

    return (
        <div className={style.containerDetail}>
            <div className={style.containerImg}>
                <img className={style.img} src={detail.flag} alt="img_flag_detail" />
            </div>
            
            <div className={style.containerInfo}>
                <p className={style.text}>ID: {detail.id}</p>
                <p className={style.text}>Name: {detail.name}</p>
                <p className={style.text}>Continent: {detail.continent}</p>
                <p className={style.text}>Capital: {detail.capital}</p>
                <p className={style.text}>SubRegion: {detail.subregion}</p>
                <p className={style.text}>Area: {detail.area}</p>
                <p className={style.text}>Population: {detail.population}</p>
            </div>

        </div>
    );
}