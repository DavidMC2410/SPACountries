import React from "react";

export default function Label(props){
    return(
        <label htmlFor={props.name} className={props.label}><p className={props.text}>{props.value}</p></label>
    )
}