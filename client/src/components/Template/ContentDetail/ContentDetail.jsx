import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCountryDetail } from '../../../redux/actions'
import { useEffect } from "react";
import style from './ContentDetail.module.css'

export default function ContentDetail(props){

    const id = props.countryId
    
    let dispatch = useDispatch();
    let detail = useSelector(state => state.countryDetail);

    useEffect(()=>{
        dispatch(getCountryDetail(id));
    },[])

    return (
        <div className={style.containerDetail}>
            
            <div className={style.containerImg}>
                <img className={style.img} src={detail.flag} alt="img_flag_detail" />
            </div>
            
            <div className={style.containerInfo}>
                <p className={style.text}><strong>ID: </strong>{detail.id}</p>
                <p className={style.text}><strong>Name: </strong>{detail.name}</p>
                <p className={style.text}><strong>Continent: </strong>{detail.continent}</p>
                <p className={style.text}><strong>Capital: </strong>{detail.capital}</p>
                <p className={style.text}><strong>SubRegion: </strong>{detail.subregion}</p>
                <p className={style.text}><strong>Area: </strong>{detail.area}</p>
                <p className={style.text}><strong>Population: </strong>{detail.population}</p>
            </div>

        </div>
    );
}