import React from "react";

export default function Label(props){
    return(
        <label htmlFor={props.htmlfor} className={props.style}>{props.text}</label>
    )
}