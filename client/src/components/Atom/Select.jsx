import React from 'react';

export default function Select (props){
    let options=props.options;
    return(
    <select className={props.style} id={props.id} onChange={props.select} size={props.size} key={props.id} multiple={props.multiple}>
        <option value='' selected>Choise...</option>
        {options.map(c=><option className={props.styleOption} value={c} key={c}>{c}</option>)}
    </select>)
}