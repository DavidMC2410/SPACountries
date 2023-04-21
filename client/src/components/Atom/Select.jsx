import React from 'react';

export default function Filter (props){
    let value=props;
    return(
    <select className={props}>
        {value.map(c=><option value={c}>{c}</option>)}
    </select>)
}