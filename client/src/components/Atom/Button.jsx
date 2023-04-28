import React from 'react';

export default function Button(props){

    return(
        <button className={props.style} onClick={props.onClick} key={props.key}> {props.text}  </button>
    )
}