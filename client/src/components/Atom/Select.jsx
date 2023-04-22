import React from 'react';

export default function Select (props){
    let value=props.value;
    return(
    <select className={props}>
        {value.map(c=><option value={c}>{c}</option>)}
    </select>)
}