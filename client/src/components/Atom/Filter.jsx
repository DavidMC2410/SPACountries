import style from './Filter.module.css'
import React from 'react';

export default function Filter (props){
    let value=props;
    return(
    <select className={style}>
        {value.map(c=><option value={c}>{c}</option>)}
    </select>)
}