import React from 'react';

export default function Select (props){
    let options=props.arrayOptions;
    return(
    <select className={props.style} id={props.id} onChange={props.select} size={props.size} key={props.id} multiple={props.multiple}>
        <option value='' >Choise...</option>
        {options.map(c=><option className={props.styleOption} value={c} key={c}>{c}</option>)}
    </select>)
}