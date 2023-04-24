import React from "react";

export default function Input(props){
    return(
        <input type={props.type} name={props.id} onChange={props.onChange}/>
    )
}