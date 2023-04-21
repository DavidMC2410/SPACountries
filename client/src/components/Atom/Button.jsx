import React from 'react';

export function Button(props){

    return(
        <button className={props.style} onClick={props.handleGoHome}> {props.text} </button>
    )
}