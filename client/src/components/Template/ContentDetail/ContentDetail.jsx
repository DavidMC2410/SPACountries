import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCountryDetail } from '../../../redux/actions'
import { useEffect } from "react";

export default function ContentDetail(props){

    const id = props.countryId

    console.log('Estoy ahora en el componente ContentDetail y se supone que el id es: ', id);
    
    let dispatch = useDispatch();
    let detail = useSelector(state => state.countryDetail);

    useEffect(()=>{
        dispatch(getCountryDetail(id));
    },[dispatch, id])

    console.log(detail);

    return (
        <div>
            <img src={detail.flag} alt="img_flag_detail" />
            <p>{detail.id}</p>
            <p>{detail.name}</p>
            <p>{detail.continent}</p>
            <p>{detail.capital}</p>
            <p>{detail.subregion}</p>
            <p>{detail.area}</p>
            <p>{detail.population}</p>
        </div>
    );
}