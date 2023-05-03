import React from 'react';

export default function Select (props){

    let options=props.arrayOptions;

    return(
    <select onBlur={props.blur} ref={props.selectRef} className={props.style} name={props.id} id={props.id} onChange={props.select} size={props.size} key={props.id} multiple={props.multiple}>
        <option value="" hidden>Choise...</option>
        {options.map(c=><option className={props.styleOption} value={c} key={c}>{c}</option>)}
    </select>)
}