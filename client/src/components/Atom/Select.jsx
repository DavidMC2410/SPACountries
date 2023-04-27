import React from 'react';

export default function Select (props){
    let options=props.options;
    return(
    <select className={props.style} id={props.id} onChange={props.select} size={props.size} onClick={props.handle} key={props.id} multiple={props.multiple}>
        {options.map(c=><option value={c} key={c}>{c}</option>)}
    </select>)
}